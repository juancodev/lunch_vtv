import {
  Router
} from "express";
import {
  getAllOrders,
  getOrdersByUserId,
  createOrder,
  deleteOrder,
  getOrderById
} from "#controller/order.controller";

const router = Router();

router.get(
  '/',
  /* middleware */
  async (req, res, next) => {
    try {
      const orders = await getAllOrders();
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }
)

router.get('/:id', /* middleware */
  async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      const getAllOrders = await getOrdersByUserId(id);
      res.json(getAllOrders);
    } catch (error) {
      next(error);
    }
  }
)

router.get('/order/:id', /* Middleware */
  async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      const getOrder = await getOrderById(id);
      res.json(getOrder);
    } catch (error) {
      next(error);
    }
  }
)

router.post('/', /* Middleware */
  async (req, res, next) => {
    try {
      const orderData = req.body;
      const createNewOrder = await createOrder(orderData.user, orderData);
      res.json(createNewOrder);
    } catch (error) {
      next(error);
    }
  }
)

router.delete('/:id', /* Middleware */
  async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      const deletedOrder = await deleteOrder(id);
      res.json(deletedOrder);
    } catch (error) {
      next(error);
    }
  }
)
export default router;