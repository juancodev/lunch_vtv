import { Router} from "express";
import {
  getMainReports,
  createMainReport
} from "#controller/mainReport.controller";

const router = Router();

router.get(
  "/",
  /* middlewares */
  async (req, res, next) => {
    try {
      const mainReports = await getMainReports();
      res.json(mainReports);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  /* middlewares */
  async(req, res, next) => {
    try {
      const mainReport = req.body;
      const newMainReport = await createMainReport(mainReport);
      res.json(newMainReport);
    } catch (error) {
      next(error);
    }
  }
)

export default router;