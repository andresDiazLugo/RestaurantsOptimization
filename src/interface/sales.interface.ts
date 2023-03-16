import { type Document, type Model } from 'mongoose'

export interface SalesI extends Document {
  amount: number
  date_sale: Date
  prepayment: boolean
}

export interface ModelSalesI extends Model<Document & SalesI> {}
