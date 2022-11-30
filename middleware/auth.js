import jwt from "jsonwebtoken";
import { UnAuthenticateError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticateError("Authentication Invalid");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = payload;
    req.user = { userId: payload.userID };
    next();
  } catch (error) {
    throw new UnAuthenticateError(
      "Authentication Invalid, Please login again!"
    );
  }
};

export default auth;
