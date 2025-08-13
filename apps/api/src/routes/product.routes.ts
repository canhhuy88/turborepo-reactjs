import express from 'express';
import * as productController from '../controllers/product.controller';
import { authenticateToken } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validateRequest';
const router = express.Router();

router.post('/', authenticateToken, validate(['name', 'sku', 'price', 'stock']), productController.createProduct);

router.put('/:id', authenticateToken, validate(['name', 'sku', 'price', 'stock']), productController.updateProduct);

router.delete('/:id', authenticateToken, productController.deleteProduct);

// router.get('/', authenticateToken,productController.getProducts);
// router.post('/',authenticateToken, productController.createProduct);

export default router; 