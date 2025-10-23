import fs from 'fs';
// Para acceder al sistema de archivos del ordenador que ejecute esto
//import path from 'path';

const logger = (req, res, next) => {

  const string = `[${new Date().toISOString()}] ${req.method} - ${req.url} - ${req.ip} - ${req.socket.remoteAddress}`;
  console.log(string);

  //hacer que se cree un fichero por dia y guaradar esos logs ahi
  const date = new Date().toISOString().split('T')[0];
  
  fs.appendFile(`./logs/${date}-request.log`,
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