import { Schema } from 'mongoose';

const departmentSchema = new Schema({
  name: {
    type: String,
    require: true,
  }
})

export { departmentSchema };