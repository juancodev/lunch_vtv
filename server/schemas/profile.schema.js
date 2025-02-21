import {
  Schema
} from "mongoose";

export const profileUserSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  avatar: {
    type: String
  },
  description: {
    type: String
  },
});