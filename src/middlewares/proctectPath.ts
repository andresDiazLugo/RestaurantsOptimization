import { type Request, type Response, type NextFunction } from 'express'
import { verifyToken } from '../utils/token.js'

export const tokenValidation = (req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined => {
  const token = req.header('auth-token')
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!token) return res.status(401).json('acceso denegado')
  try {
    const payload = verifyToken(token)
    req.userId = payload.id
  } catch (error) {
    return res.status(404).json({
      msg: 'Acceso denegado'
    })
  }
  next()
}
