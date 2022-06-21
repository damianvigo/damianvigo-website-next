// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conectarDB from '../../../lib/dbConnect';
import Posts from '../../../models/Posts';

export default async function handler(req, res) {
  await conectarDB();
  // POST api/post

  const { method } = req;

  console.log(req.body);
  switch (method) {
    case 'POST':
      try {
        const post = new Posts(req.body);
        await post.save();

        return res.status(200).json({ success: true, post });
      } catch (error) {
        return res.status(400).json({ success: false, error });
      }
    default:
      return res
        .status(500)
        .json({ success: false, error: 'Falla de servidor' });
  }
}
