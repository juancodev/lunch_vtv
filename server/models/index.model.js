import { model } from 'mongoose';
import {
  userSchema,
} from "#schemas/user.schema";
import {
  profileUserSchema
} from "#schemas/profile.schema";
import {
  departmentSchema
} from "#schemas/department.schema";
import {
  scheduleSchema
} from "#schemas/schedule.schema";
import {
  beneficiarySchema
} from "#schemas/beneficiary.schema";

export const User = model('User', userSchema);
export const ProfileUser = model('Profile', profileUserSchema);
export const Department = model('Department', departmentSchema);
export const Schedule = model('Schedule', scheduleSchema);
export const Beneficiary = model('Beneficiary', beneficiarySchema);