import express from 'express'
import jsonServer from 'json-server'
import cors from 'cors'
import data from './data'

const PORT = process.argv[3] || 3500

let router = undefined;

const app = express();

const createServer = () => {
  setTimeout(() => {
    router = jsonServer.router(data())
  })
}

createServer()

app.use(cors())
app.use(jsonServer.bodyParser)
app.use("/api", (req, res, next) => router(req, res, next))


app.listen(PORT, () => console.log(`Web service started running on port ${PORT}`))

