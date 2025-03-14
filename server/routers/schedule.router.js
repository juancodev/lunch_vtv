import { Router } from 'express';
import {
  getAllSchedules,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} from '#controller/schedule.controller';

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

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = await updateSchedule(id, data);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await deleteSchedule(id);
    res.json(response);
  } catch (err) {
    next(err);
  }
});

export default router;