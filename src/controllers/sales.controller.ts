import { type Request, type Response } from 'express'
import { SalesService } from '../services/sales.service'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class SalesController {
  protected static salesServices = new SalesService()
  // controller for get all sales
  public static async getSales (req: Request, res: Response): Promise<void> {
    try {
      // call to service, and get all sales
      const sales = await this.salesServices.getSales()

      // if not sales found
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!sales) {
        res.status(404).json({
          status: 404,
          message: 'not sales found'
        })
      }

      // if sales found, return sales and status 200
      res.status(200).json({
        status: 200,
        message: 'sales found',
        data: sales
      })
    } catch (error: any) {
      // if error, return error and status 400
      res.status(400).json({
        status: 400,
        message: error.message
      })
    }
  }
}
