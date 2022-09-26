import { IContactRequest, IUserRequest, IUserResponse } from "../../interfaces";
import { prisma } from "../../app";
import { AppError } from "../../errors/appError";

const createContactService = async (data: IContactRequest, idToken: any) => {
  const emailAlreadyExists = await prisma.contacts.findUnique({
    where: { email: data.email },
  });
  console.log(emailAlreadyExists);
  const phoneAlreadyExists = await prisma.contacts.findUnique({
    where: { phone: data.phone },
  });

  if (phoneAlreadyExists) {
    throw new AppError(
      `this phone already used on contact ${phoneAlreadyExists?.fullName}`
    );
  }

  if (emailAlreadyExists) {
    throw new AppError(
      `this email already used on contact ${emailAlreadyExists?.fullName}`
    );
  }

  const contact = prisma.contacts.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      email2: data.email2 ? data.email2 : null,
      phone: data.phone,
      phone2: data.phone2 ? data.phone2 : null,
      user: {
        connect: {
          id: idToken,
        },
      },
    },
  });
  return contact;
};
export default createContactService;
