import { Router } from 'express';
import { getAllBeneficiaries, createBeneficiary } from '#controller/beneficiary.controller';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const response = await getAllBeneficiaries();
    res.json(response);
  } catch (error) {
    next(error);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const response = await createBeneficiary(data);
    res.json(response);
  } catch (error) {
    next(error);
  }
})

export default router;