import { Schema } from "mongoose";

export const moderatorGroupSchema = new Schema({
  fullName: {
    type: Schema.Types.String,
    require: true
  },
  email: {
    type: Schema.Types.String,
    require: true
  },
  password: {
    type: Schema.Types.String,
    require: true
  },
  role: {
    type: Schema.Types.String,
    default: "moderator",
    require: true
  },
  status: {
    type: Schema.Types.Boolean,
    default: true,
    require: true,
  },
  create_at: {
    type: Date,
    default: Date.now
  }
})