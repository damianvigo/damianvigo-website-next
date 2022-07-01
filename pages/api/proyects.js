// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conectarDB from '../../lib/dbConnect';
import Proyect from '../../models/Proyect';

export default async function handler(req, res) {
  await conectarDB();
  // POST api/proyect

  const { method } = req;
  switch (method) {
    case 'POST':
      try {
        const proyect = new Proyect(req.body);
        await proyect.save();

        return res.status(201).json({ success: true, proyect });
      } catch (error) {
        return res.status(400).json({ success: false, error });
      }
    default:
      return res
        .status(500)
        .json({ success: false, error: 'Falla de servidor' });
  }
}
