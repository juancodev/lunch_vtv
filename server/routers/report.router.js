import {
  Router
} from 'express';
import {
  getAllReport,
  getReportByUserID,
  createReport,
  updateReport
} from '../controller/report.controller.js';

const router = Router();

router.get('/',
  /* middleware*/
  async (req, res, next) => {
    try {
      const reports = await getAllReport();
      res.json(reports);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:userId',
  /* middleware*/
  async (req, res, next) => {
    try {
      const {
        userId
      } = req.params;
      const onlyReport = await getReportByUserID(userId);
      res.json(onlyReport);
    } catch (error) {
      next(error);
    }
  }
)

router.post('/:id',
  /* middleware*/
  async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      const report = req.body;
      const newReport = await createReport(id, report);
      res.json(newReport);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  /* middleware*/
  async (req, res, next) => {
    try {
      const {
        id
      } = req.params;
      const data = req.body;
      const report = await updateReport(id, data);
      res.json(report);
    } catch (error) {
      next(error);
    }
  }
)

export default router;