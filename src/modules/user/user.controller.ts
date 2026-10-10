import { userServices } from "./user.service.js";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import httpStatus from "http-status"; 

// Create User
const createUser = catchAsync(async (req, res) => {
  const result = await userServices.createUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User created successfully!",
    data: result,
  });
});

// Get All Users
const getAllUsers = catchAsync(async (req, res) => {
  const result = await userServices.getAllUserFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users fetched successfully!",
    data: result,
  });
});

// Update User
const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userServices.updateUserInDB(id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User updated successfully!",
    data: result,
  });
});

// Delete User
const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await userServices.deleteUserFromDB(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User deleted successfully!",
    data: result,
  });
});

export const userControllers = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};