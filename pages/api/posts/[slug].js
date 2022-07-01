// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conectarDB from '../../../lib/dbConnect';
import Posts from '../../../models/Posts';

export default async function handler(req, res) {
  await conectarDB();
  // GET api/post/:slug
  // DELETE api/post/:slug
  // PUT api/post/:slug

  const {
    method,
    query: { slug },
  } = req;

  console.log(req.body);
  console.log(req.query);
  switch (method) {
    case 'PUT':
      try {
        const post = await Posts.findOneAndUpdate({ slug: slug }, req.body);

        if (!post) {
          return res.status(404).json({ success: false, error });
        }

        return res.json({ success: true, data: post });
      } catch (error) {
        return res.status(400).json({ success: false, error });
      }
    case 'DELETE':
      try {
        const post = await Posts.deleteOne({ slug: slug });

        if (!post) {
          return res.status(404).json({ success: false });
        }

        return res.json({ success: true, data: post });
      } catch (error) {
        return res.status(404).json({ success: false, error });
      }
    case 'GET':
      try {
        const post = await Posts.findOne({ slug: slug }).lean();

        if (!post) {
          return res.status(404).json({ success: false });
        }

        return res.json({ success: true, data: post });
      } catch (error) {
        return res.status(404).json({ success: false, error });
      }
    default:
      return res
        .status(500)
        .json({ success: false, error: 'Falla de servidor' });
  }
}
