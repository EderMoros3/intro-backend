import express from 'express';
import logger from './middlewares/logger.js';
import mainRouter from './routes/mainRouter.js';
import pool from './db/db.js';

const PORT = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(express.json());


// Cargar rutas
app.use('/api', mainRouter);


// Conectarse a la DB
pool.connect()
.then(() =>{
  console.log('✅ Conectado a la base de datos');
  
  // Se desconecta el cliente para el resto de conexiones
  // client.release();
}).catch((error) => {
  console.error('❌ Error al conectar a la base de datos', error);
})




// Middleware de loggeo

app.use(logger);

app.listen(PORT, () => {
  console.log('Servidor escuchando en el puerto ' + PORT);
})