import { Router } from "express";

import {
  getAllListReseller,
  getMyResellers,
  createResellerGroup
} from "#controller/resellerGroup.controller";

const router = Router();

router.get('/',
  /*middleware */
  async (req, res, next) => {
    try {
      const resellers = await getAllListReseller();
      res.json(resellers);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/moderator/:id',
  /* midleware */
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const myResellers = await getMyResellers(id);
      res.json(myResellers);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  /* middleware */
  async (req, res, next) => {
    try {
      const data = req.body;
      const createReseller = await createResellerGroup(data);
      res.json(createReseller);
    } catch (error) {
      next(error);
    }
  }
);

export default router;