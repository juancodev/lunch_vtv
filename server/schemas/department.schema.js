import { Schema } from 'mongoose';

export const departmentSchema = new Schema({
  name: {
    type: Schema.Types.String,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now
  },
})