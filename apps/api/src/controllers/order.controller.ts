import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/auth.middleware';

const prisma = new PrismaClient();

export const createOrder = async (req: Request, res: Response) => {
  const { customerId, userId, storeId, items } = req.body;
  const totalAmount = items.reduce((sum: number, item: { price: number }) => sum + item.price , 0);

  const order = await prisma.order.create({
    data: {
      customerId,
      userId,
      storeId,
      totalAmount,
      status: 'completed',
      orderItems: {
        create: items.map((item: any) => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    },
    include: { orderItems: true },
  });

  res.json(order);
};


export const getOrders = async (req: AuthRequest,res: Response) =>{
  const { note, total } = req.body;           // ✅ lấy từ body
  const userId = req.user?.userId;            // ✅ lấy từ JWT
  const role = req.user?.role;


  console.log('User ID:', userId);
  res.json({userId:userId,note:note,total:total});
}