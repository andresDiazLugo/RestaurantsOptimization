/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { controllerSignUp, controllerSignIn } from '../controllers/controllerUser.js'

const router = Router()

// ruta de signup o crear usuario
router.post('/signUp', controllerSignUp)
// ruta de inicio de secion
router.post('/signIn', controllerSignIn)

export { router }
