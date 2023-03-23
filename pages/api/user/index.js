import User from '../../../models/User';
import db from '../../../utils/db';
import argon2 from 'argon2';

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
  const { method } = req;

  db.connect();

  if (method === 'GET') {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  if (method === 'POST') {
    try {
      const {firstName, lastName, email, password, confirmPassword, photo} = req.body;
      let pathPhoto;

      if(password !== confirmPassword) return res.status(400).json({ message: 'Password dan confirm password harus sama.' });
      if(photo === '' || photo === null) {
        pathPhoto = '/images/profiles/default-user.jpg';
      }else{
        pathPhoto = photo;
      }

      const hashPassword = await argon2.hash(password);
      const userData = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": hashPassword,
        "photo": pathPhoto
      };
      const user = await User.create(userData);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
