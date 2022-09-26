import { prisma } from "../../app";
import { AppError } from "../../errors/appError";

const deleteContactService = async (idParams: string) => {
  const contact = await prisma.contacts.findUnique({ where: { id: idParams } });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  const contactDelete = await prisma.contacts.delete({
    where: { id: idParams },
  });

  return contactDelete;
};
export default deleteContactService;
