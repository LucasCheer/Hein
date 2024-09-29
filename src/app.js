import express from 'express'
import routesUsers from './routes/users.routes.js'
import routesRegisters from './routes/register.routes.js'
import routesAuth from './routes/auth.routes.js'; 
import cors from 'cors'; 


const app = express()

app.use(cors({
    origin: '*', 
    credentials: true
}));

app.use(express.json())


app.use(routesUsers)

app.use(routesRegisters)

app.use(routesAuth); 


export default app