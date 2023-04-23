/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { generateToken, verifyToken } from '../utils/token.js'
import { User } from '../models/User.js'
import { SendMail } from '../utils/nodemailer.js'
import { encryptPassword } from '../utils/bcrypt.js'
import { AlertasUser } from '../alertas/alertas.js'
import validator from 'validator'

const { URL_CLIENT } = process.env

export const sendMailToResetPassword = async ({
  email
}: {
  email: string
}): Promise<string[] | [string[]]> => {
  const alert = new AlertasUser()
  try {
    const user = await User.findOne({ email })
    if (user === null) {
      return alert.addAlerts('error', 'el email ingresado no existe')
    }
    console.log(email)
    const token = generateToken(user._id)
    await SendMail({
      to: email,
      subject: 'Reset your password',
      html: `
      <body style="background-color: black;">
      <div style=" height:fit-content; width: 50%;margin:auto; text-align:center; padding-bottom: 2rem;
      background-image: url(https://res.cloudinary.com/doeqsvbxc/image/upload/v1682050324/pexels-philippe-donn-1169754_lwaru1.jpg); background-size: 100%;
      ">
          <h1 style="color: white;">Haz click en Recuperar de contraseña</h1>
          <a style="font-size: 1.2rem; font-weight: 600; color: aqua;" href='${URL_CLIENT ?? ''}/token=${token}'>>>Recuperar Contraseña<<</a>
          <p style="font-size: 1.1rem; font-weight: 500; color: red;">**IMPORTANTE**Si usted no solicito el cambio de contraseña, omita este mensaje mensaje</p>
          <div>
              <h4 style="font-weight: 700; color: white;">My ORDER la aplicacion que te ayuda a gestionar y crecer tu negocio</h4>
              <h2 style="font-weight: 600; color: white;">Derechos reservados@MY ORDER</h2>
          </div>
      </div>
  </body>
      `
    })
    return alert.addAlerts('success', 'revise su casilla de correo')
  } catch (error: any) {
    console.error(error)
    return alert.addAlerts('error', error?.message)
  }
}

export const resetPassword = async ({
  token,
  newPassword
}: {
  token: string
  newPassword: string
}): Promise<string[] | [string[]]> => {
  const alert = new AlertasUser()
  try {
    const { userId } = verifyToken(token)
    const isPasswordValid: string = validator.isStrongPassword(newPassword)
    if (isPasswordValid) {
      const passwordEncrypted = encryptPassword(newPassword)
      await User.findByIdAndUpdate(userId, {
        $set: { password: passwordEncrypted }
      })
      return alert.addAlerts('success', 'La contraseña fue cambiada con exito, tratar de iniciar sesion')
    } else {
      return alert.addAlerts('error', 'la contraseña debe contener minuscula o mayuscula, números y un simbolo como #,@')
    }
  } catch (error: any) {
    console.error(error)
    return alert.addAlerts('error', error?.message)
  }
}
