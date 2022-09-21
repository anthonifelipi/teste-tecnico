import { prisma } from "../../app";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUserlogin } from "../../interfaces";
import { AppError } from "../../errors/appError";

const loginService = async ({ email, password }: IUserlogin) => {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    throw new AppError("Wrong credentials", 403);
  }

  const matchPassword = await compare(password, user.password);

  if (!matchPassword) {
    throw new AppError("Wrong credentials", 403);
  }

  const token = jwt.sign(
    { email: email, id: user.id },
    String(process.env.JWT_SECRET),
    {
      expiresIn: "12h",
    }
  );

  return token;
};

export default loginService;
