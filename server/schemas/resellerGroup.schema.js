import { Schema } from 'mongoose';

export const resellerGroupSchema = new Schema({
  moderator: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "User"
  },
  fullName: {
    type: Schema.Types.String,
    require: true
  },
  email: {
    type: Schema.Types.String,
    require: true,
    unique: true
  },
  password: {
    type: Schema.Types.String,
    require: true
  },
  role: {
    type: Schema.Types.String,
    require: true
  },
  range: {
    type: Schema.Types.String,
    require: true,
    default: "Novato"
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
});