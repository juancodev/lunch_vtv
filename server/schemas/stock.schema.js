import { Schema } from 'mongoose';

export const stockSchema = new Schema({
  platform: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  status: {
    type: Boolean,
    require: true,
    default: true
  }
});