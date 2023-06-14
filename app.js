import express, { Router } from 'express'
import bodyParser from 'body-parser'
import "dotenv/config"
import { Dbconnection } from './config/main.js'
import UserRouter from './routes/user.js'
import AdminRouter from './routes/admin.js'


const app = express()

app.use(bodyParser.json());
Dbconnection()
app.use(UserRouter)
app.use(AdminRouter)

app.listen(process.env.PORT, () => {
  console.log('listening on *:' + process.env.PORT);
})