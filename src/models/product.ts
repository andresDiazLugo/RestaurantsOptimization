import mongoose from 'mongoose'
const { Schema } = mongoose

const ProductSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  imageUrl: { type: String, require: true }
})

ProductSchema.set('toJSON', {
  transform: (_document, product) => {
    product.id = product._id
    delete product._id
    delete product.__v
  }
})

const Product = mongoose.model('products', ProductSchema)

export default Product
