import { Router } from "express";
import {
  getAllModerators,
  createModerator
} from "#controller/moderatorGroup.controller";

const router = Router();

router.get(
  '/',
  /* middleware */
  async (req, res, next) => {
    try {
      const moderators = await getAllModerators();
      res.json(moderators);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  /* middleware */
  async (req, res, next) => {
    try {
      const data = req.body;
      const newModerator = await createModerator(data);
      res.json(newModerator);
    } catch (error) {
      next(error);
    }
  }
);

export default router;