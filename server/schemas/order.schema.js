import {
  Schema
} from "mongoose";

export const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  clientName: {
    type: String,
    require: true
  },
  clientNumber: {
    type: String,
    require: true
  },
  services: [{
    type: Object,
    require: true
  }],
  stock: [{
    type: Object,
    require: true
  }],
  referencePay: {
    type: String,
    require: true
  },
  accountStatus: {
    type: Boolean,
    require: true,
    default: false
  },
  create_at: {
    type: Date,
    default: Date.now
  }
})