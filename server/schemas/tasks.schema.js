import {
  Schema
} from "mongoose";

export const tasksSchema = new Schema({
  task: {
    type: Schema.Types.String,
    require: true,
  },
  create_at: {
    type: Date,
    default: Date.now
  }
})