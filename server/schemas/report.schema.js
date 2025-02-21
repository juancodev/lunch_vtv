import {
  Schema,
  Types
} from "mongoose";

export const ReportSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "User"
  },
  causeOfTheProblem: {
    type: String,
    required: true
  },
  service: [{
    type: Object,
    required: true,
  }],
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  reportDescription: {
    type: String,
    default: ''
  },
  reportImage: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "nueva",
  },
  response: {
    type: String,
    default: ""
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})