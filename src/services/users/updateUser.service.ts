import { prisma } from "../../app";
import { AppError } from "../../errors/appError";
import { IUserRequestUpdate } from "../../interfaces/index";

const updateUserService = async (
  data: IUserRequestUpdate,
  dataUser: any,
  idParams: any
) => {
  const user = await prisma.user.findUnique({ where: { id: dataUser.id } });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (idParams == dataUser.id) {
    const updatedUser = await prisma.user.update({
      where: {
        id: dataUser.id,
      },
      data,
      include: {
        contacts: true,
      },
    });
    const { password, ...response } = updatedUser;
    return response;
  } else {
    throw new AppError("You not owner of this profile", 403);
  }
};
export default updateUserService;
