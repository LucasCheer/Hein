import express from 'express'
import routesUsers from './routes/users.routes.js'
import routesRegisters from './routes/register.routes.js'


const app = express()

app.use(express.json())

app.use(routesUsers)

app.use(routesRegisters)

export default app