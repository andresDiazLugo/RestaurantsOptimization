import type { Request, Response } from 'express'
import { CreateProduct } from '../services/product.service.js'
import { handlerHttpError } from '../utils/error.handler.js'

export const postProductController = async (
  req: Request,
  res: Response
  ): Promise<void> => {
  try {
    const product = req.body
    const file = req.file

    
    console.log("este es la imagen",req.file, req.files)
    const data = await CreateProduct({ ...product, file })
    res.send(data)
  } catch (error) {
    handlerHttpError({ res, error: 'ERROR_GET_ITEM', errorRaw: error })
  }
}
