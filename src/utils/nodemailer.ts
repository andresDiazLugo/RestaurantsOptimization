import nodemailer from 'nodemailer'
import { type Mail } from '../interface/mail'

export async function SendMail ({ to, subject, html }: Mail): Promise<any> {
  const { USER_EMAIL, APP_PASS, USER_EMAIL_TO } = process.env
  console.log(USER_EMAIL)
  const mailOptions = {
    to,
    from: USER_EMAIL_TO,
    subject,
    text: 'Plaintext version of the message',
    html
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: USER_EMAIL,
      pass: APP_PASS
    }
  })

  const nodemailerResponse = await transporter.sendMail(mailOptions)

  return nodemailerResponse
}
