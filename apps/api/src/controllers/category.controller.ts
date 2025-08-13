import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/auth.middleware';
import { getErrorMessage } from '../utils/errorHandler';
import * as categoryService from '../services/category.service';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: getErrorMessage(err) });
  }
};

export const getCategory = async (req: AuthRequest, res: Response) => {
  try {
    const { name = '', page = 1, limit = 10 } = req.body;
    const response = await categoryService.getCategory(req.body);
    return res.json(response);
  } catch (error) {
    console.error('Lỗi khi lấy category:', error);
    return res.status(500).json({ message: 'Lỗi server' });
  }
}

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.updateCategory(req.params.id, req.body);
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: getErrorMessage(err) });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    await categoryService.deleteCategory(req.params.id);
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: getErrorMessage(err) });
  }
};
