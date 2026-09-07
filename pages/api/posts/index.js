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

  const { method } = req;

  if (method === 'POST') {
    const auth = verifyApiKey(req);
    if (!auth.valid) {
      return res.status(401).json({ success: false, error: auth.error });
    }
  }

  switch (method) {
    case 'POST':
      try {
        const post = await Posts.create(req.body);
        await revalidate('/blog');
        return res.status(201).json({ success: true, post });
      } catch (error) {
        return res.status(400).json({ success: false, error });
      }
    default:
      return res
        .status(500)
        .json({ success: false, error: 'Falla de servidor' });
  }
}
