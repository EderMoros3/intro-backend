import express from 'express';
import logger from './middlewares/logger.js';
import mainRouter from './routes/index.js';

const PORT = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(express.json());

// Middleware de loggeo
app.use(logger);

app.listen(PORT, () => {
  console.log('Servidor escuchando en el puerto ' + PORT);
})