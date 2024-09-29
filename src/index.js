//Punto de entrada de la Aplicacion 

import dotenv from 'dotenv';
import app from "./app.js"

dotenv.config();

app.listen(3000);


console.log('Servidor iniciado')