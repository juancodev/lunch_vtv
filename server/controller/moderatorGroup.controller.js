import {
  ModeratorGroup
} from "#models/index.model";

export const getAllModerators = async () => {
  try {
    const moderators = await ModeratorGroup.find();
    return moderators;
  } catch (error) {
    console.log(error);
  }
};

export const createModerator = async (data) => {
  try {
    const newModerator = await ModeratorGroup.create(data);
    return newModerator;
  } catch (error) {
    console.log(error);
  }
}