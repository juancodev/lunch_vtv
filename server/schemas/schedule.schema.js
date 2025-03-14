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
  time_start: {
    type: String,
    required: true
  },
  time_end: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
});