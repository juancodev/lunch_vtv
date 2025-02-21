import mongoose from "mongoose";
import {
  ResellerGroup
} from "#models/index.model"


export const getAllListReseller = async() => {
  try {
    const getAllReseller = await ResellerGroup.find();
    return getAllReseller;
  }catch(e){
    console.log(e);
  }
}

export const getMyResellers = async(id) => {
  try {
    const getResellers = await ResellerGroup.find()
    .populate({
      path: "moderator",
      select: "_id"
    })
    .exec();

    const filteredModerator = getResellers.filter((element) =>
        element?.moderator._id.equals(new mongoose.Types.ObjectId(id))
      );
    return filteredModerator;
  }catch (error) {
    console.log(error);
  }
}

export const createResellerGroup = async (data) => {
  try {
    const createReseller = await ResellerGroup.create(data);
    return createReseller;
  } catch (error) {
    console.log(error);
  }
}