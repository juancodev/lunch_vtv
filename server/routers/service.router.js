import {
  Router
} from "express";
import {
  getServices,
  getOnlyService,
  getOnlyServiceByID,
  createService,
  updateService,
} from "../controller/service.controller.js";

const router = Router();

router.get('/'
  /*, middleware*/
  ,
  async (req, res, next) => {
    try {
      const {
        serviceName
      } = req.query;

      if (serviceName) {
        const services = await getOnlyService(serviceName);
        res.json(services);
      } else {
        const services = await getServices();
        res.json(services);
      }
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  /* middleware,*/
  async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      const service = await getOnlyServiceByID(id);
      res.json(service);
    } catch (err) {
      next(err);
    }
  }
)

router.post('/'
  /*, middleware,*/
  ,
  async (req, res, next) => {
    try {
      const service = req.body;
      const newService = await createService(service);
      res.json(newService);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id'
  /* middleware*/
  ,
  async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      const service = await updateService(id, req.body);
      res.json(service);
    } catch (error) {
      next(error)
    }
  }
)

export default router;