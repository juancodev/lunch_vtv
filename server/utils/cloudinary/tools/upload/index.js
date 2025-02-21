import {
  v2 as cloudinary
} from "cloudinary";

export const uploadFileToCloudinary = async (imagePath, options) => {
  try {
    cloudinary.config({
      secure: true
    })

    const result = await cloudinary.uploader.upload(imagePath, options);
    console.log(result);
    // public_id es la identificación de la imagen
    return result;

  } catch (error) {
    console.log(error);
    return error;
  }
}