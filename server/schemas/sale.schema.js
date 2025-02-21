import { Schema } from "mongoose";

export const saleSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    require: true
  },
  myStock: [{
    userAccount: {
      type: Schema.Types.String,
      require: true
    },
    emailAccount: {
      type: Schema.Types.String,
      require: true
    },
    passwordAccount: {
      type: Schema.Types.String,
      require: true
    },
    statusAccount: {
      type: Schema.Types.Boolean,
      require: true
    }
  }]
})