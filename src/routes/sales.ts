import { Router } from 'express';
// import SalesController from 'src/controllers/sales.controller.js';
import SalesController from '../controllers/sales.controller.js';

const router = Router()

// route for get all sales
router.get('/', SalesController.getSales);

export { router }