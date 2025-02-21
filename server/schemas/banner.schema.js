import {
  Schema
} from "mongoose";

export const bannerSchema = new Schema({
  title: {
    type: Schema.Types.String,
    require: true
  },
  description: {
    type: Schema.Types.String,
    require: true
  },
  urlImage: {
    type: Schema.Types.String,
    require: true
  }
})