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

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
};