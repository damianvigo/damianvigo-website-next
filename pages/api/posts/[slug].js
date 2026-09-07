import conectarDB from '../../../lib/dbConnect';
import Posts from '../../../models/Posts';
import { verifyApiKey } from '../../../lib/verifyApiKey';

async function revalidate(path) {
  try {
    const host = process.env.VERCEL_URL || 'http://localhost:3000';
    await fetch(`${host}/api/revalidate?secret=${process.env.REVALIDATION_SECRET}&path=${path}`);
  } catch (error) {
    // revalidation failed silently, page will update on next ISR cycle
  }
}

export default async function handler(req, res) {
  await conectarDB();

  const {
    method,
    query: { slug },
  } = req;

  if (method === 'PUT' || method === 'DELETE') {
    const auth = verifyApiKey(req);
    if (!auth.valid) {
      return res.status(401).json({ success: false, error: auth.error });
    }
  }

  switch (method) {
    case 'PUT':
      try {
        const post = await Posts.updateOne({ slug: slug }, req.body);

        if (!post) {
          return res.status(404).json({ success: false, error: 'Post not found' });
        }

        await revalidate('/blog');
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

        await revalidate('/blog');
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
