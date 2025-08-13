import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import * as productService from '../services/product.service';
import { getErrorMessage } from '../utils/errorHandler';
const prisma = new PrismaClient();

export const getProducts = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
   try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: getErrorMessage(err) });
  }

};


export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.json(product);
  } catch (err) {
    res.status(400).json({ error:getErrorMessage(err)});
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(400).json({ error:getErrorMessage(err)});
  }
};


/*
  
  const { name, price, stock, sku, categoryId, storeId ,cost} = req.body;
  const product = await prisma.product.create({
    data: { name,sku, price,cost, stock, categoryId, storeId },
  });
  res.json(product);
  
await prisma.product.create({
  data: {
    name,
    price,
    cost, // ← cần thêm
    stock,
    sku,
    categoryId,
    store: {
      connect: { id: storeId }, // ← dùng quan hệ
    },
  },
});
*/