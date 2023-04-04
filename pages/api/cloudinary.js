const cloudinary = require('cloudinary').v2;

export default function signature(req, res) {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
      // eager: 'c_pad,h_300,w_400|c_crop,h_200,w_260',
      // folder: 'archive',
    },
    process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
  );

  res.statusCode = 200;
  res.json({ signature, timestamp });
}
