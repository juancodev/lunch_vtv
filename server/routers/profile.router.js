import {
  Router
} from "express";
import {
  getProfileOfUser
} from "../controller/profile.controller.js";

const router = Router();

router.get('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;

    const response = await getProfileOfUser(id);
    res.json(response);
  } catch (error) {
    next(error);
  }
})

export default router;