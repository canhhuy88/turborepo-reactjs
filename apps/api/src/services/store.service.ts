import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function createStore(data: any) {
  const { name, address, phone } = data;

  // Check unique title
  const existing = await prisma.store.findFirst({ where: { name } });
  if (existing) throw new Error('name already exists');

  return await prisma.store.create({
    data: {
      name,
      address,
      phone
    }
  });
}

export async function updateStore(id: string, data: any) {
  const { name, address, phone } = data;

  const existing = await prisma.store.findUnique({ where: { id } });
  if (!existing) throw new Error('store not found');

  return await prisma.store.update({
    where: { id },
    data: {
      name,
      address,
      phone
    }
  });
}

export async function getAllStore() {
  const store = await prisma.store.findMany();
  return store;
}

export async function deleteStore(id: string) {
  const existing = await prisma.store.findUnique({ where: { id } });
  if (!existing) throw new Error('store not found');

  return await prisma.store.delete({ where: { id } });
}
