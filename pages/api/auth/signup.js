import User from '../../../models/User';
import db from '../../../utils/db';
import argon2 from 'argon2';

async function handler(req, res) {
  if (req.method !== 'POST') return;

  const { firstName, lastName, email, password } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 6
  ) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }

  await db.connect();

  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      res.status(422).json({ message: 'user already exist!' });
      await db.disconnect();
      return;
    }

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: await argon2.hash(password),
      photo: '/images/profiles/default-user.jpg',
    });

    const user = await newUser.save();
    await db.disconnect();

    res.status(201).json({ ...user, message: 'user created' });
  } catch (error) {
    throw new Error(error.message);
  }
}

export default handler;
