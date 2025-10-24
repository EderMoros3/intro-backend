import express from 'express';
//import fileRouter from './routes/file.router.js';
import ENV from './utils/envLoader.js'; 

const app = express();

// Middlewares
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Cloud!');
});

// Dentro de /cloud metemos el fileRouter
//app.use('/cloud', fileRouter);

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});


