import express from 'express'
import cors from 'cors'
import routesUsers from './routes/users.routes.js'
import routesRegisters from './routes/register.routes.js'


const app = express()

app.use(cors({
    origin: 'http://127.0.0.1:5500',
    credentials: true
}));

app.use(express.json())

app.use(routesUsers)

app.use(routesRegisters)

export default app