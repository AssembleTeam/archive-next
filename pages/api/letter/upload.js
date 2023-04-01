import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'

var mv = require('mv');

export const config = {
    api: {
        bodyParser: false,
    }
}

/**
 *
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function handler(req, res) {
    const data = await new Promise((resolve, reject) => {
        const form = new IncomingForm()
        
         form.parse(req, (err, fields, files) => {
             if (err) return reject(err)
             console.log(fields, files)
             console.log(files.file.filepath)
             var oldPath = files.file.filepath;
             var newPath = `./public/images/letters/in/${files.file.originalFilename}`;
             mv(oldPath, newPath, function(err) {
             });
             res.status(200).json({ fields, files })
         })
     })
}