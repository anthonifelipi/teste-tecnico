import { prisma } from "../../app";

const listContactByIdService = async (idParams: string) => {
  const contact = await prisma.contacts.findUnique({ where: { id: idParams } });
  return contact;
};
export default listContactByIdService;
