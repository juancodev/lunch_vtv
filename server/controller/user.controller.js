import bcrypt from "bcrypt";
import {
  User
} from "../models/index.model.js";
import {
  createProfile
} from "./profile.controller.js";

export const createUser = async (data) => {
  const password = await bcrypt.hash(data.password, 10);
  const userData = {
    ...data,
    password: password
  }
  const newUser = await User.create(userData);
  await createProfile(newUser._id, newUser.fullName);
  return newUser;
}

export const listUsers = async () => {
  const users = await User.find()
    .populate('department')
    .exec();
  return users;
}

export const getOneUser = async (_id) => {
  const user = await User.findById(_id);
  return user;
}

export const getOneUserWithEmail = async (email) => {
  const user = await User.findOne({
    email
  });

  return user;
}

export const updateUser = async (_id, data) => {
  if (data.password) {
    const password = await bcrypt.hash(data.password, 10);
    const userData = {
      ...data,
      password: password
    }
    const updateUserData = await User.findByIdAndUpdate(_id, userData)
    return updateUserData;
  } else {
    const updateUserData = await User.findByIdAndUpdate(_id, data);
    return updateUserData;
  }
};

export const deleteUser = async (_id) => {
  const user = await User.findByIdAndDelete(_id);
  return user;
}