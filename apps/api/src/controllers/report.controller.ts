// report.controller.ts

import { Request, Response } from 'express';
import { Order, OrderItem, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getDailyReport = async (req: Request, res: Response) => {
  try {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    const orders = await prisma.order.findMany({
      where: {
        createdAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        orderItems: true,
      },
    });

    // const totalRevenue = orders.reduce((sum: number, order:Order) => {
    //   const orderTotal = order.orderItems.reduce((subtotal: number, item:OrderItem) => {
    //     return subtotal + item.price * item.quantity;
    //   }, 0);
    //   return sum + orderTotal;
    // }, 0);
    const totalRevenue =0;

    res.json({
      date: startOfDay.toISOString().slice(0, 10),
      orderCount: orders.length,
      totalRevenue,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate report' });
  }
};
