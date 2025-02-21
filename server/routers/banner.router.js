import {
  Router
} from "express";
import {
  getAllBanner,
  createBanner,
  updateBanner
} from "../controller/banner.controller.js";

const router = Router();

router.get(
  '/',
  /* Middleware*/
  async (req, res, next) => {
    try {
      const response = await getAllBanner();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  /* middleware*/
  async (req, res, next) => {
    try {
      const banner = req.body;
      const response = await createBanner(banner);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);

export default router;