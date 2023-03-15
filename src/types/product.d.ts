export interface Product {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
}

export interface NewProduct extends Omit<Product, 'id'> {
  file: Express.Multer.File
}
