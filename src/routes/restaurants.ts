import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('estoy en la ruta de usuarios')
})

export { router }