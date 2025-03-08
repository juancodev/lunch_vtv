import {
  Router
} from "express";
import users from "./user.router.js";
import authUser from "./auth.router.js";
import profiles from "./profile.router.js";
import department from "./department.router.js";
import schedule from "./schedule.router.js";
import beneficiary from "./beneficiary.router.js";
// import banners from "./banner.router.js";
// import ordersReports from "./orderReport.router.js";
// import sales from "./sale.router.js";
// import resellerGroups from "./resellerGroup.router.js";
// import moderatorGroups from "./moderatorGroup.router.js"
// import stock from "./stock.router.js";
// import mainReport from "./mainReport.router.js";

const router = Router();

export const RouterAPI = (app) => {
  app.use('/api/v1', router);
  router.use('/users', users);
  router.use('/auth', authUser);
  router.use('/profiles', profiles);
  router.use('/departments', department);
  router.use('/schedules', schedule);
  router.use('/beneficiaries', beneficiary);
  // router.use('/orders-reports', ordersReports)
  // router.use('/banners', banners);
  // router.use('/sales', sales);
  // router.use('/reseller-groups', resellerGroups);
  // router.use('/moderator-groups', moderatorGroups);
  // router.use('/stocks', stock);
  // router.use('/main-reports', mainReport);
};