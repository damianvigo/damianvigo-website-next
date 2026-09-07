import { verifyApiKey } from '../../lib/verifyApiKey';

export default async function handler(req, res) {
  const { secret, path } = req.query;

  if (secret !== process.env.REVALIDATION_SECRET) {
    return res.status(401).json({ error: 'Invalid secret' });
  }

  if (!path) {
    return res.status(400).json({ error: 'Missing path parameter' });
  }

  try {
    await res.revalidate(path);
    return res.json({ revalidated: true, path });
  } catch (error) {
    return res.status(500).json({ error: 'Error revalidating' });
  }
}
