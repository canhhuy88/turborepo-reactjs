import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const existingUser = await prisma.user.findUnique({
    where: { username: 'admin@example.com' },
  });

  if (!existingUser) {
    const hashedPassword = await bcrypt.hash('123456', 10);

    await prisma.user.create({
      data: {
        //name: 'Admin User',
        username: 'admin@example.com',
        password: hashedPassword,
        role: Role.admin, // tùy vào schema của bạn
      },
    });

    console.log('✅ Admin user created!');
  } else {
    console.log('ℹ️ Admin user already exists.');
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
