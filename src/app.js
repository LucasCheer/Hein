import express from 'express'
import routesUsers from './routes/users.routes.js'


const app = express()

app.use(express.json())

app.use(routesUsers)

export default app