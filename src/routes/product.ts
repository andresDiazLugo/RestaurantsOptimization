/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { postProductController } from '../controllers/product.controller.js'
import { upload } from '../middlewares/multer.js'

const router = Router()

router.post('/create', upload.single('image'), postProductController)

export { router }
