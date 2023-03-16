import express, { type Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { connection } from './config/connection.js'
import { router } from './routes/index.js'

const whitelist = process.env.NODE_ENV === 'development' ? ['http://localhost:3002', 'http://localhost:5173', 'http://localhost:3000'] : [process.env.CLIENT_URL ?? '']

class App {
  public app: Application

  constructor () {
    this.app = express()
  }

  // configuraciones del server
  configurationServer (): void {
    this.app.set('PORT', process.env.PORT ?? 8000)
    console.log('Server start')
  }

  // middlewares
  middlewares (): void {
    this.app.use(cors({
      origin: whitelist
    }))
    this.app.use(express.json())
    this.app.use(morgan('dev'))
  }

  // routes
  routes (): void {
    // ruta usuario
    this.app.use(router)
  }

  // levantar servidor
  server (): void {
    console.log('Server start')
    const numberPort = this.app.get('PORT')
    this.app.listen(this.app.get('PORT'), () => {
      console.log('server runing in the port ', numberPort)
      connection().then(console.log).catch(console.error)
    })
  }
}

const app = new App()

app.configurationServer()
app.middlewares()
app.routes()
app.server()

export default app.app
