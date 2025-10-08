import { db } from '../../lib/db'; // Your database connection

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Get IP address (available on Vercel)
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    // Insert into database
    await db.query(
      `INSERT INTO visits (path, referrer, screen, language, ip, created_at) 
       VALUES ($1, $2, $3, $4, $5, NOW())`,
      [req.body.path, req.body.referrer, req.body.screen, req.body.language, ip],
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ success: false });
  }
}
