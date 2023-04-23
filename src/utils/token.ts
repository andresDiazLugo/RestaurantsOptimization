import jwt from 'jsonwebtoken'
const secret = process.env.SECRET_KEY ?? 'alazar'

export const generateToken = (userId: string | undefined): string => {
  const payload = { userId }
  return jwt.sign(payload, secret)
}

export const verifyToken = (token: string): { userId: string } => {
  const decoded = jwt.verify(token, secret)
  return decoded as { userId: string }
}
