import express from 'express';
import* as categoryController  from '../controllers/category.controller';
import { authenticateToken } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validateRequest';
const router = express.Router();

router.post('/create-category', validate(['name',]),authenticateToken, categoryController.createCategory);
router.post('/update-category/:id', validate(['name']),authenticateToken, categoryController.updateCategory);
router.post('/delete-category/:id',authenticateToken, categoryController.deleteCategory);
router.post('/get-category',authenticateToken, categoryController.getCategory);


export default router;