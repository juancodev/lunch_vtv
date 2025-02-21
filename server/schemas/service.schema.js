import {
  Schema
} from "mongoose";

export const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  image: {
    type: String,
    required: true
  },
  percentplan: {
    type: Object,
    required: true
  },
  percentfull: {
    type: Object,
  }
})