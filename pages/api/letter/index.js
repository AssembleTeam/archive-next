import Letter from '../../../models/Letter';
import db from '../../../utils/db';

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
      const letters = await Letter.find();
      res.status(200).json(letters);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  if (method === 'POST') {
    try {
      const letter = await Letter.create(req.body);
      res.status(201).json(letter);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
