import Letter from '../../../models/Letter';
import db from '../../../utils/db';

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
      const letter = await Letter.findById(id).populate('kepada');
      res.status(200).json(letter);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  if (method === 'PUT') {
    try {
      const updateLetter = await Letter.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );

      res.status(200).json(updateLetter);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
  if (method === 'DELETE') {
    try {
      await Letter.findByIdAndDelete(id);

      res.status(200).json({ message: 'Surat berhasil dihapus.' });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
