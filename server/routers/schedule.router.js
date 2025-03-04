import { Router } from 'express';
import { getAllSchedules, createSchedule } from '#controller/schedule.controller';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const response = await getAllSchedules();
    res.json(response);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const response = await createSchedule(data);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

export default router;