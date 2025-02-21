import { Schema } from "mongoose";

export const mainReportSchema = new Schema({
  moderator: {
      type: Schema.Types.ObjectId,
      ref: "Moderator"
    },
    title: {
      type: String,
      required: true
    },
    causeOfTheProblem: {
      type: String,
      required: true
    },
    service: [{
      type: String,
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
    },
    updated_at: {
      type: Date,
      default: Date.now
    }
});