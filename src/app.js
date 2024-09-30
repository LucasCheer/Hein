import express from 'express'
import cors from 'cors'
import routesUsers from './routes/users.routes.js'
import routesRegisters from './routes/register.routes.js'
import routesAuth from './routes/auth.routes.js'; 
import cookieParser from 'cookie-parser';


const app = express()

app.use(cors({
    origin: 'http://127.0.0.1:5500', 
    credentials: true
}));

app.use(express.json())

app.use(cookieParser())

app.use(routesUsers)

app.use(routesRegisters)

app.use(routesAuth); 



export default app