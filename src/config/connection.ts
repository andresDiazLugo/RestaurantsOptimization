import { config } from 'dotenv'
import { connect } from 'mongoose'

config()

const { DB_URL_TEST, DB_URL_DEVELOPMENT, DB_URL_PRODUCTION, NODE_ENV } = process.env

const DB_CONNECTIONS = {
  development: DB_URL_DEVELOPMENT,
  production: DB_URL_PRODUCTION,
  test: DB_URL_TEST
}

type Enviroment = 'development' | 'production' | 'test'

export const connection = async (): Promise<void> => {
  console.log({ DB_URL_DEVELOPMENT, DB_URL_PRODUCTION, NODE_ENV })
  try {
    const enviroment = NODE_ENV ?? 'development'
    const mongoURI = DB_CONNECTIONS[enviroment as Enviroment]
    
    await connect(mongoURI ?? '')    
    console.log('Conexion exitosa a la base de datos')
  } catch (error) {
    console.log('Error al conectar a la base de datos', error)
  }
}
