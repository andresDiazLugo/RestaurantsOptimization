/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import SalesController from '../controllers/sales.controller'

const router = Router()

// route for get all sales
router.get('/', SalesController.getSales)

export { router }
