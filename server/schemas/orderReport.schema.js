import {
  Schema
} from "mongoose";

export const orderReportSchema = new Schema({
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
  },
  report: {
    type: Schema.Types.ObjectId,
    ref: 'Report',
  }
})