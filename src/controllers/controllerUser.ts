import { type Request, type Response } from 'express'
import { signUp, signIn } from '../services/user.service.js'

export const controllerSignUp = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('body', req.body)
    const dateForModelUser = req.body
    const response = await signUp(dateForModelUser)
    res.status(200).json(response)
  } catch (error: any) {
    res.status(400).json(['error', [error.message]])
  }
}

export const controllerSignIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const dateForModelUser = req.body
    const response = await signIn(dateForModelUser)
    res.status(200).json(response)
  } catch (error: any) {
    res.status(400).json(['error', [error.message]])
  }
}
