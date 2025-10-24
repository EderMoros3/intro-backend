import express from 'express';
import fileRouter from './routes/file.router.js';
import ENV from './utils/envLoader.js'; 
import fs from 'fs';

const app = express();

// Middlewares
app.use(express.json());

// ./cloud/storage
if(!fs.existsSync(ENV.CLOUD_STORAGE_PATH)) {
  fs.mkdirSync(ENV.CLOUD_STORAGE_PATH, { recursive: true }); // mkdir -p
  // recursive: crea directorios padres si no existen
}

app.get('/', (req, res) => {
  res.send('Hello, Cloud!');
});

// Dentro de /cloud metemos el fileRouter
app.use('/cloud', fileRouter);

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});


