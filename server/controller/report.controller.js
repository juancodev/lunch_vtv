import {
  Report,
} from '../models/index.model.js';
import {
  getOneUser
} from '../controller/user.controller.js';
import {
  uploadFileToCloudinary
} from '../utils/cloudinary/tools/upload/index.js'

export const getAllReport = async () => {
  const result = await Report.find()
    .populate("user")
    .exec();
  return result;
}

export const getReportByUserID = async (_userID) => {
  try {
    const result = await Report.find({
      user: _userID
    });
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }

}

export const createReport = async (_userID, data) => {
  try {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true
    }

    const userData = await getOneUser(_userID);

    const uploadedImage = await uploadFileToCloudinary(data.reportImage, options)

    if (!uploadedImage?.url) {
      throw new Error("Error al subir la imagen a Cloudinary");
    }

    const reportData = {
      ...data,
      user: userData,
      reportImage: uploadedImage.url,
    }

    const newReport = await Report.create(reportData);
    return newReport;

  } catch (error) {
    console.error(error);
    return error;
  }

}

export const updateReport = async (idReport, change) => {
  try {
    const updateReport = await Report.updateOne({
      _id: idReport
    }, change)
    return updateReport;
  } catch (error) {
    console.log(error);
  }
}