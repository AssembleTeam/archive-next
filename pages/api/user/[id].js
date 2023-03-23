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
  const { id } = req.query;

  db.connect();

  if (method === 'GET') {
    try {
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  if (method === 'PUT') {
    try {
      const {firstName, lastName, email, newPassword, oldPassword, photo} = req.body;
      const existUser = await User.findById(id);
      if(!existUser) return res.status(404).json({message: 'User tidak ditemukan.'});
      const match = await argon2.verify(existUser.password, oldPassword);
      if(!match) return res.status(400).json({message: 'Password saat ini salah.'});
      let hashPassword = await argon2.hash(newPassword);

      req.body = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": hashPassword,
        "photo": photo
      }
      const updateUser = await User.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  if (method === 'DELETE') {
    try {
      const existUser = await User.findById(id);
      if(!existUser) return res.status(404).json({message: 'User tidak ditemukan.'});
      await User.findByIdAndDelete(id);

      res.status(200).json({ message: 'User berhasil dihapus.' });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
