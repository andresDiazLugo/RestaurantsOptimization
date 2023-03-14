import { v2 as cloudinary, type UploadApiResponse, type DeleteApiResponse } from 'cloudinary'
import { removeFile } from '../utils/removeFiles.js'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

export const uploadImgToCloudinary = async ({ filePath }: { filePath: string }): Promise<{ error?: string, response?: UploadApiResponse }> => {
  try {
    const cloudinaryUlpoadResponse = await cloudinary.uploader.upload(filePath, { folder: 'images' })
    console.log({ cloudinaryUlpoadResponse })
    removeFile(filePath)
    return { response: cloudinaryUlpoadResponse }
  } catch (error: any) {
    console.error(error)
    removeFile(filePath)
    return { error: error.message }
  }
}

export const deleteFileFromCloudinary = async ({ id }: { id: string }): Promise<{ error: string } | { response: DeleteApiResponse }> => {
  try {
    const responseDestroyCloudinary = await cloudinary.uploader.destroy(id)
    return { response: responseDestroyCloudinary }
  } catch (error: any) {
    console.error(error)
    return { error: error?.message }
  }
}
