import { UnAuthenticateError } from "../errors/index.js";

const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new UnAuthenticateError("Not authorize to access this route!");
};

export default checkPermissions;
