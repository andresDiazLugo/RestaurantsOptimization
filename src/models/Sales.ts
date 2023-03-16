import { Schema, model, type Document } from 'mongoose'
import { type ModelSalesI, type SalesI } from '../interface/sales.interface'

const SalesSchema = new Schema<SalesI>({
  amount: { type: Number, required: true },
  date_sale: { type: Date },
  prepayment: { type: Boolean, required: true }
},
{
  versionKey: false
})

const SalesModel = model<Document & SalesI, ModelSalesI>('Sales', SalesSchema)
export default SalesModel
