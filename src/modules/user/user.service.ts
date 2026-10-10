import prisma from "utils/prisma.js";



const createUserIntoDB = async (payload: any) => {
  const result = await prisma.user.create({
    data: payload,
  });
  return result;
};


const getAllUserFromDB = async () => {
  const result = await prisma.user.findMany();
  return result;
};


const updateUserInDB = async (id: string, payload: any) => {
  const result = await prisma.user.update({
    where: { id },
    data: payload,
  });
  return result;
};


const deleteUserFromDB = async (id: string) => {
  const result = await prisma.user.delete({
    where: { id },
  });
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  updateUserInDB,
  deleteUserFromDB,
};