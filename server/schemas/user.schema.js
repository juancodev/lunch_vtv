import {
  Schema
} from "mongoose";

export const userSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: 'trabajador'
  },
  status: {
    type: Boolean
  },
  created_at: {
    type: Date,
    default: Date.now
  },
});