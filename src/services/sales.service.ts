import { type ModelSalesI } from 'src/interface/sales.interface'
import SalesModel from '../models/Sales.js'

export class SalesService {
  private readonly salesModel: ModelSalesI = SalesModel
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async getSales () {
    try {
      const sales = await this.salesModel.find()
      return sales
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
