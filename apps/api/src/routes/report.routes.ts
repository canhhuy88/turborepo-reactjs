import express from 'express';
import { getDailyReport } from '../controllers/report.controller';
const router = express.Router();

router.get('/daily', getDailyReport);

export default router;
