import { Router} from 'express';
import multer from 'multer';
import {
  uploadStock,
  getAllStocks,
  updateStockStatus,
} from '#controller/stock.controller';

const router = Router();
const upload = multer({ storage: multer.memoryStorage()} );

router.get(
  '/',
  /* middleware */
  async (req, res, next) => {
    try {
      const stocksList = await getAllStocks();
      res.json(stocksList);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/upload',
  /* middleware */
  upload.single('file-upload'),
  async (req, res, next) => {
    try {
      const csvBuffer = req.file.buffer.toString('utf-8');
      const stockResult = await uploadStock(csvBuffer);
      res.json(stockResult);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/update-status',
  /* middleware */
  async (req, res, next) => {
    const {ids, status} = req.body;
    try {
      const updatedStock = await updateStockStatus(ids.map(id => ({_id: id})), status);
      res.json(updatedStock);
    } catch (error) {
      next(error);
    }
  }
)


export default router;