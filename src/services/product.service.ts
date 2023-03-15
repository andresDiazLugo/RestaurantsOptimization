import { type NewProduct, type Product as ProductType } from '../types/product'
import Product from '../models/product.js'
import { uploadImgToCloudinary } from '../config/cloudinary.js'

interface ReturnCreateProduct {
  error?: string
  product?: ProductType
}

export const CreateProduct = async ({ price, description, title, file }: NewProduct): Promise<ReturnCreateProduct> => {
  
  try {
    console.log(file)
    const { response, error } = await uploadImgToCloudinary({ filePath: file.path })
    if (response === undefined) {
      return {
        error
      }
    }
    const product = new Product({
      title,
      description,
      price,
      imageUrl: response.secure_url
    })
    const newProduct = await product.save()
    return { product: newProduct }
  } catch (error: any) {
    console.error(error)
    return {
      error: error.message
    }
  }
}
