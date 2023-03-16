/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { passwordController, resetPasswordController } from '../controllers/password.controller.js'

const router = Router()

router.post('/reset', passwordController)

router.post('/reset/:token', resetPasswordController)

export { router }
