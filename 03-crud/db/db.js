import pg from 'pg';

const { Pool } = pg;

// Pool:
// Cursor de la base de datos, la conexion a la db.
// Configuracion de la conexion
// es un json con los datos de conexion
// Puedes tener varias pools en una app
// como hacer microservicios

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'granja-abejas',
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

// Iniciar un cliente de conexion
const pool = new Pool(config);

export default pool;