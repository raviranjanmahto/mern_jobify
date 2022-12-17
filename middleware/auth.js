import jwt from "jsonwebtoken";
import { UnAuthenticateError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticateError("Authentication Invalid Please login again!");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const testUser = payload.userID === "639c83c0de0b50a20507c0f7";
    req.user = { userId: payload.userID, testUser };
    next();
  } catch (error) {
    throw new UnAuthenticateError(
      "Authentication Invalid, Please login again!"
    );
  }
};

export default auth;
