import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: {
      email: "test@test.com",
    },
    update: {},
    create: {
      name: "John",
      email: "test@test.com",
      username: "john_doe", // Added username
      password: "securepassword", // Added password
      bio: "Just a regular guy", // Added bio
      
    },
  });
  console.log({user});
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
