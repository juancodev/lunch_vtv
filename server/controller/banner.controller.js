import {
  Banner
} from "../models/index.model.js";

export const getAllBanner = async () => {
  try {
    const result = await Banner.find();
    return result
  } catch (error) {
    return error;
  }
}

export const createBanner = async (data) => {
  try {
    const newBanner = await Banner.create(data);
    return newBanner;
  } catch (error) {
    return error;
  }
}

export const updateBanner = async (_id, data) => {
  try {
    const updateDataBanner = await Banner.updateOne({
      _id
    }, data);
    return updateDataBanner;
  } catch (error) {
    return error;
  }
}