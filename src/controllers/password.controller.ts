import type { Request, Response } from 'express'
import { sendMailToResetPassword, resetPassword } from '../services/password.service.js'
import { handlerHttpError } from '../utils/error.handler.js'

export const passwordController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email } = req.body
    const data = await sendMailToResetPassword({ email })
    res.send(data)
  } catch (error) {
    handlerHttpError({ res, error: 'ERROR_GET_ITEM', errorRaw: error })
  }
}

export const resetPasswordController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { token } = req.params
    const { newPassword } = req.body
    const data = await resetPassword({ token, newPassword })
    res.send(data)
  } catch (error) {
    handlerHttpError({ res, error: 'ERROR_GET_ITEM', errorRaw: error })
  }
}
