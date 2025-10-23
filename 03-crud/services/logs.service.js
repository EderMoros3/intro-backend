import pool  from "../db/db.js";

export const logRequest = async (date, method, url, ip) => {
  const result = await pool.query(
    'INSERT INTO logs (fecha, metodo, url, ip) VALUES ($1, $2, $3, $4) RETURNING *',
    [date, method, url, ip]
  );

  return result.rows[0];
}