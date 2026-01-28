// import mysql, { Pool } from 'mysql2/promise';

// // Database configuration
// const dbConfig = {
//   host: "127.0.0.1",
//   port: 3306,
//   user: "root",
//   password: "123456",
//   database: "web-tech-2",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// };

// // Create connection pool
// const pool: Pool = mysql.createPool(dbConfig);

// // Test database connection
// export async function testConnection() {
//   try {
//     const connection = await pool.getConnection();
//     console.log('✅ Database connected successfully');
//     connection.release();
//     return true;
//   } catch (error) {
//     console.error('❌ Database connection failed:', error);
//     return false;
//   }
// }

// export default pool;

import { createPool } from 'mysql2/promise';

const db = {
  host: 'localhost',
  port: 3306,
  username: 'root', 
  password: '123456',
  database: 'web-tech-2',
};

export const pool = createPool({
  host: db.host,
  port: db.port,
  user: db.username,
  password: db.password,
  database: db.database,
});