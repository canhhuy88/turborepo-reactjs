import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createCategory(data: any) {
  const { name } = data;

  // Check unique title
  const existing = await prisma.category.findFirst({ where: { name } });
  if (existing) throw new Error('name already exists');

  return await prisma.category.create({
    data: {
      name
    }
  });
}

export async function updateCategory(id: string, data: any) {
  const { name } = data;

  // Check if SKU already exists on another product
  const existing = await prisma.category.findUnique({ where: { id } });
  if (!existing) throw new Error('category not found');

  return await prisma.category.update({
    where: { id },
    data: {
      name
    }
  });
}

export async function deleteCategory(id: string) {
  const existing = await prisma.category.findUnique({ where: { id } });
  if (!existing) throw new Error('category not found');

  return await prisma.category.delete({ where: { id } });
}

export async function getCategory(data: any) {
  const { name = '', page = 1, limit = 10 } = data;
  const pageNumber = parseInt(page as string);
  const pageSize = parseInt(limit as string);
  const skip = (pageNumber - 1) * pageSize;

  const searchName = typeof name === 'string' ? name : undefined;
  // Đếm tổng số bản ghi khớp
  const totalItems = await prisma.category.count({
    where: searchName
      ? {
        name: {
          contains: searchName,
          mode: 'insensitive',
        },
      }
      : undefined,
  });

  const categories = await prisma.category.findMany({
    where: searchName
      ? {
        name: {
          contains: searchName,
          mode: 'insensitive',
        },
      }
      : undefined,
    take: pageSize, // phân trang
    skip: skip,
  });

  return {
    items: categories,
    totalItems,
    totalPages: Math.ceil(totalItems / pageSize),
    currentPage: pageNumber,
  };

}
