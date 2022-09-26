import { NextFunction, Request, Response } from "express";
import { prisma } from "../app";
import { AppError } from "../errors/appError";

const verifyOwner = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const idUser = request.user.id;
  const { contact_id } = request.params;

  const contact = await prisma.contacts.findUnique({
    where: { id: contact_id },
  });

  if (!contact) {
    throw new AppError("User or contact not found", 404);
  }

  if (idUser !== contact.userId) {
    throw new AppError("You not owner of this contact", 403);
  }

  next();
};

export default verifyOwner;
