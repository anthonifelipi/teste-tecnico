import { prisma } from "../../app";

const listContactsService = async (idToken: any) => {
  const listcontacts = await prisma.contacts.findMany({
    where: { userId: idToken },
  });
  return listcontacts;
};
export default listContactsService;
