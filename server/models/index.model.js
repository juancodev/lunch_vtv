import {
  model
} from "mongoose";
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

// import {
//   bannerSchema
// } from "#schemas/banner.schema";

// import {
//   orderReportSchema
// } from "#schemas/orderReport.schema";
// import {
// import {
//   saleSchema
// } from "#schemas/sale.schema";
// import {
//   resellerGroupSchema
// }
// from "#schemas/resellerGroup.schema";
// import {
//   moderatorGroupSchema
// } from "#schemas/moderatorGroup.schema";
// import {
//   stockSchema
// } from "#schemas/stock.schema";
// import { mainReportSchema } from "#schemas/mainReport";


export const User = model('User', userSchema);
export const ProfileUser = model('Profile', profileUserSchema);
export const Department = model('Department', departmentSchema);
export const Schedule = model('Schedule', scheduleSchema);
export const Beneficiary = model('Beneficiary', beneficiarySchema);
// export const Order = model('Order', orderSchema);
// export const Banner = model('Banner', bannerSchema);
// export const OrderReport = model('OrderReport', orderReportSchema);
// export const Sales = model('Sales', saleSchema);
// export const ResellerGroup = model('Reseller', resellerGroupSchema);
// export const ModeratorGroup = model('Moderator', moderatorGroupSchema);
// export const Stock = model('Stock', stockSchema);
// export const MainReport = model('MainReport', mainReportSchema);