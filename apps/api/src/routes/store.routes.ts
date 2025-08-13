import express from 'express';
import* as storeController  from '../controllers/store.controller';
import { authenticateToken } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validateRequest';
const router = express.Router();

router.post('/create-store', validate(['name','address','phone']),authenticateToken, storeController.createStore);
router.post('/update-store/:id', validate(['name','address','phone']),authenticateToken, storeController.updateStore);
router.post('/delete-store/:id',authenticateToken, storeController.deleteStore);
router.post('/get-store',authenticateToken, storeController.getStores);


export default router;