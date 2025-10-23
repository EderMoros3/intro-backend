import { log } from 'console';
import fs from 'fs';
// Para acceder al sistema de archivos del ordenador que ejecute esto
import path from 'path';

const logger = (req, res, next) => {

  const today = new Date();
  const __dirname = path.resolve();
  // Devuelve la ruta del proyecto en el formato del SO

  const string = `[${today.toISOString()}] ${req.method} - ${req.url} - ${req.ip} - ${req.socket.remoteAddress}`;
  console.log(string);

  const date = today.toISOString().slice(0, 10) // "YYYY-MM-DD" en UTC

  let logPath = path.resolve('./logs/'); // Ruta absoluta de la carpeta logs
  
  if(!fs.existsSync(logPath)){
    fs.mkdirSync(logPath);
  }

  logPath = path.join(logPath, date + '.log');
  
  fs.appendFile(logPath,
    string + '\n',
    (err) => {
      if (err) {
        console.error('Error writing to log file', err);
      }
    }
  )
    
  next();
}

export default logger;