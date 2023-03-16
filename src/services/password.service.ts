import { generateToken, verifyToken } from '../utils/token.js'
import { User } from '../models/User.js'
import { SendMail } from '../utils/nodemailer.js'
import { encryptPassword } from '../utils/bcrypt.js'

const { URL_CLIENT } = process.env

export const sendMailToResetPassword = async ({
  email
}: {
  email: string
}): Promise<{ message?: string, error?: string }> => {
  try {
    const user = await User.findOne({ email })
    if (user === null) {
      return {
        error: 'Incorrect email'
      }
    }
    console.log(email)
    const token = generateToken(user._id)
    await SendMail({
      to: email,
      subject: 'Reset your password',
      html: `
        <a href='${URL_CLIENT ?? ''}/${token}'>Reset password</a>
      `
    })
    return {
      message: 'Email sended'
    }
  } catch (error: any) {
    console.error(error)
    return {
      error: error?.message
    }
  }
}

export const resetPassword = async ({
  token,
  newPassword
}: {
  token: string
  newPassword: string
}): Promise<{ message?: string, error?: string }> => {
  try {
    const { userId } = verifyToken(token)
    const passwordEncrypted = encryptPassword(newPassword)
    await User.findByIdAndUpdate(userId, {
      $set: { password: passwordEncrypted }
    })
    return {
      message: 'Seuccess'
    }
  } catch (error: any) {
    console.error(error)
    return {
      error: error?.message
    }
  }
}
