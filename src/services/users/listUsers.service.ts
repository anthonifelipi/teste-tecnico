import { prisma } from "../../app";

const listUsersService = async () => {
  const listUsers = await prisma.user.findMany({ include: { contacts: true } });

  return listUsers;
};
export default listUsersService;
