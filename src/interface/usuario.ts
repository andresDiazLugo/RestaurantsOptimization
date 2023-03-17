import { type Document } from 'mongoose'

export interface IUser extends Document {
  username: string
  phone: string
  email: string
  password: string
  createAt?: Date
  id?: string
}

export interface ResponseSignIn {
  alert: string[] | [string[]]
  user: IUser
  token: string
}
