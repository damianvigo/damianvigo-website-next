export function verifyApiKey(req) {
  const apiKey = req.headers['x-api-key'];
  const validApiKey = process.env.API_KEY;

  if (!validApiKey) {
    return { valid: false, error: 'API_KEY not configured on server' };
  }

  if (!apiKey || apiKey !== validApiKey) {
    return { valid: false, error: 'Invalid or missing API key' };
  }

  return { valid: true };
}
