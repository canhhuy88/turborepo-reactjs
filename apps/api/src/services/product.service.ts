import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createProduct(data: any) {
  const { name, sku, price,cost, stock, categoryId,storeId } = data;

  // Check unique SKU
  const existing = await prisma.product.findUnique({ where: { sku } });
  if (existing) throw new Error('SKU already exists');

  return await prisma.product.create({
    data: {
      name,
      sku,
      price: parseFloat(price),
      cost:parseInt(price),
      stock: parseInt(stock),
      categoryId,
      storeId
    }
  });
}

export async function updateProduct(id: string, data: any) {
  const { name, sku, price, stock, categoryId } = data;

  // Check if SKU already exists on another product
  const existing = await prisma.product.findUnique({ where: { sku } });
  if (existing && existing.id !== id) throw new Error('SKU already used by another product');

  return await prisma.product.update({
    where: { id },
    data: {
      name,
      sku,
      price: parseFloat(price),
      stock: parseInt(stock),
      categoryId
    }
  });
}

export async function deleteProduct(id: string) {
  return await prisma.product.delete({ where: { id } });
}
