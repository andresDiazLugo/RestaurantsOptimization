import bcrypt from 'bcrypt'

export const encryptPassword = (password: string): string => {
  const salRounds = 10
  const salt = bcrypt.genSaltSync(salRounds)
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

export const comparePassword = (password: string, hashPassword: string | undefined): boolean => {
  if (hashPassword === undefined) {
    hashPassword = ''
  }
  return bcrypt.compareSync(password, hashPassword)
}
