import {
  Router
} from "express";
import passport from "passport";

const router = Router();

router.post('/login',
  passport.authenticate('local', {
    session: false
  }),
  async (req, res, next) => {
    try {
      const user = req.user;

      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

export default router;