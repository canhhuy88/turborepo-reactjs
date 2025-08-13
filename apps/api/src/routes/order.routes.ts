import { Router } from 'express';
import { authenticateToken } from '../middlewares/auth.middleware';
import { createOrder, getOrders } from '../controllers/order.controller';

const router = Router();

router.post('/', authenticateToken, createOrder);
router.post('/getOrder', authenticateToken, getOrders);

export default router;