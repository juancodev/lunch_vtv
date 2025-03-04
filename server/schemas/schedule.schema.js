import { Schema } from 'mongoose';

export const scheduleSchema = new Schema({
  schedule: {
    type: String,
    require: true,
  },
  day: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  alias: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
});