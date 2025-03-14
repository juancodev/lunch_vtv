import { Router } from 'express';
import {
  getDepartments,
  createDepartment,
  listDepartmentsWithUserCount,
  updateDepartment,
  deleteDepartment
} from '#controller/department.controller';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const response = await listDepartmentsWithUserCount();
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const response = await createDepartment(data);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = await updateDepartment(id, data);
    res.json(response);
  } catch (error) {
    next(error);
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await deleteDepartment(id);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

export default router;