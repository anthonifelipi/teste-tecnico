import { IContactUpdateRequest } from "../../interfaces";
import { prisma } from "../../app";
import { AppError } from "../../errors/appError";

const updateContactService = async (
  data: IContactUpdateRequest,
  dataUser: any,
  idParams: string
) => {
  const contact = await prisma.contacts.findUnique({
    where: { id: idParams },
  });
  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  const updatedContact = await prisma.contacts.update({
    where: {
      id: idParams,
    },
    data,
  });
  return updatedContact;
};

export default updateContactService;
