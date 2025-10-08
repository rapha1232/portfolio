import { createPool } from '@vercel/postgres';

export const db = createPool({
  connectionString: import.meta.env.POSTGRES_URL,
});

// Initialize database (run once)
export async function initDB() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS visits (
      id SERIAL PRIMARY KEY,
      path VARCHAR(255) NOT NULL,
      referrer VARCHAR(255),
      screen VARCHAR(50),
      language VARCHAR(20),
      ip VARCHAR(45),
      created_at TIMESTAMP DEFAULT NOW()
    );
    
    CREATE INDEX IF NOT EXISTS idx_visits_path ON visits(path);
    CREATE INDEX IF NOT EXISTS idx_visits_created_at ON visits(created_at);
  `);
}
