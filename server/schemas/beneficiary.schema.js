import { Schema } from 'mongoose';

export const beneficiarySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  schedule: {
    type: Schema.Types.ObjectId,
    ref: 'Schedule'
  },
  times: {
    type: String,
    required: true
  },
  has: {
    type: Boolean,
    default: false
  }
})