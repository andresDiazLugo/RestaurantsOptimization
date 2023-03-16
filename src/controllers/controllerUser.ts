import { type Request, type Response } from 'express'
import { signUp, signIn } from '../services/user.service.js'

export const controllerSignUp = async (req: Request, res: Response): Promise<void> => {
  const dateForModelUser = req.body
  const response = await signUp(dateForModelUser)

  res.json(response)
}

export const controllerSignIn = async (req: Request, res: Response): Promise<void> => {
  const dateForModelUser = req.body
  const response = await signIn(dateForModelUser)

  res.json(response)
}
