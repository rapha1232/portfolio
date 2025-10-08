import { getSession } from 'next-auth/react';
import { db } from '../../lib/db';

export default async function handler(req, res) {
  // Add authentication check here (see security section)
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { period = '7d' } = req.query;

    const results = await db.query(`
      SELECT 
        path,
        COUNT(*) as visits,
        COUNT(DISTINCT ip) as unique_visits,
        MAX(created_at) as last_visit
      FROM visits
      WHERE created_at > NOW() - INTERVAL '${period}'
      GROUP BY path
      ORDER BY visits DESC
    `);

    res.status(200).json(results.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
