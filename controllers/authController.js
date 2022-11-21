import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values!");
  }

  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    throw new BadRequestError("Email already register, Please login!");
  }

  const user = await User.create({ name, email, password });
  const token = await user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      name: user.name,
      email: user.email,
      lastName: user.lastName,
      // location: user.location,
    },
    token,
    location: user.location,
  });
};
const login = async (req, res) => {
  res.send("login user");
};
const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
