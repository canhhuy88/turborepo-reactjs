
import { Request, Response } from 'express';
import { getErrorMessage } from '../utils/errorHandler';
import * as storeService from '../services/store.service';

export const createStore = async (req: Request, res: Response) => {
  try {
    const category = await storeService.createStore(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: getErrorMessage(err) });
  }
};

export const updateStore = async (req: Request, res: Response) => {
  try {
    const category = await storeService.updateStore(req.params.id, req.body);
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: getErrorMessage(err) });
  }
};

export const deleteStore = async (req: Request, res: Response) => {
  try {
    await storeService.deleteStore(req.params.id);
    res.json({ message: 'store deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: getErrorMessage(err) });
  }
};

export const getStores = async (req: Request, res: Response) => {
  try {
    const store = await storeService.getAllStore();
    res.json(store);
  } catch (err) {
    res.status(400).json({ error: getErrorMessage(err) });
  }
};
