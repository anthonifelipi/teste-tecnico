import { IUserRequest, IUserResponse } from "../../interfaces";
import { prisma } from "../../app";
import * as bcrypt from "bcryptjs";
import { AppError } from "../../errors/appError";

const createUserService = async (data: IUserRequest) => {
  const emailAlreadyExists = await prisma.user.findUnique({
    where: { email: data.email },
  });
  const phoneAlreadyExists = await prisma.user.findUnique({
    where: { phone: data.phone },
  });

  if (phoneAlreadyExists) {
    throw new AppError("phone already exists");
  }
  if (emailAlreadyExists) {
    throw new AppError("email already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      fullName: data.fullName,
      password: hashedPassword,
      email: data.email,
      email2: data.email2 ? data.email2 : null,
      phone: data.phone,
      phone2: data.phone2 ? data.phone2 : null,
    },
    include: {
      contacts: true,
    },
  });

  const { password, ...response } = user;

  return response;
};
export default createUserService;
