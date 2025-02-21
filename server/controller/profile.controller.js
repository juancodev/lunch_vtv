import {
  ProfileUser,
  User
} from "../models/index.model.js"

export const getProfileOfUser = async (idUser) => {
  const id = await User.findById(idUser);

  const profile = await ProfileUser.findOne({
      user: id
    })
    .populate("user")
    .then(user => {
      return user
    })
    .catch(err => console.log(err));

  return profile
};

export const createProfile = async (userId, name) => {
  const avatar = name.split(" ");

  const urlAvatar = `https://ui-avatars.com/api/?name=${avatar[0]}+${avatar[1]}&background=random&rounded=true`;

  const profile = await ProfileUser.create({
    user: userId,
    avatar: urlAvatar,
    description: ""
  });

  return profile;
};