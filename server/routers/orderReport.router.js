import {
  Router
} from "express";
import {
  getAllOrderReport,
  getOrderReportByID,
  getOrderReportByUser,
  createOrderReport,
  updateOrderReport
} from "#controller/orderReport.controller"

const router = Router();

router.get(
  '/',
  /* middleware */
  async (req, res, next) => {
    try {
      const limit = parseInt(req.query.limit, 10) || 10;
      const offset = parseInt(req.query.offset, 10) || 0;

      const {data, totalCount} = await getAllOrderReport(limit, offset);
      res.json({
        data,
        totalCount,
        limit,
        offset,
        totalPages: Math.ceil(totalCount / limit),
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  /* middleware */
  async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      const orderReport = await getOrderReportByID(id)
      res.json(orderReport);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/user/:id',
  /* middleware */
  async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      const orderReport = await getOrderReportByUser(id);
      res.json(orderReport);
    } catch (error) {
      next(error);
    }
  }
)

router.post(
  '/',
  /* middleware */
  async (req, res, next) => {
    try {
      const data = req.body;
      const newOrderReport = await createOrderReport(data);
      res.json(newOrderReport);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  /* middleware */
  async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      const data = req.body;
      const response = await updateOrderReport(id, data);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
)

export default router;