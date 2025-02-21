import {
  Router
} from "express";
import {
  getAllSales,
  createSale
} from "#controller/sale.controller";

const router = Router();

router.get(
  '/',
  /* middleware */
  async (req, res, next) => {
    try {
      const allSales = await getAllSales();
      res.json(allSales);
    } catch (error) {
      next(error);
    }
  }
)

router.post('/', /* Middleware */
  async (req, res, next) => {
    try {
      const saleData = req.body;
      const sale = await createSale(saleData);
      res.json(sale);
    } catch (error) {
      next(error);
    }
  }
)


export default router;