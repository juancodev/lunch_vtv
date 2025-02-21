import {
  Router
} from "express";
import {
  createUser,
  listUsers,
  getOneUserWithEmail,
  getOneUser
} from "../controller/user.controller.js";

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const {
      email
    } = req.query;
    if (email) {
      const response = await getOneUserWithEmail(email);
      res.json(response);
    } else {
      const response = await listUsers();
      res.json(response);
    }
  } catch (err) {
    next(err);
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const response = await getOneUser(id);
    res.json(response);
  } catch (err) {
    next(err);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const response = await createUser(data);
    res.json(response);
  } catch (err) {
    next(err);
  }
})

export default router;