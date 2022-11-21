import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./customApi.js";

class UnAuthenticateError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.UNAUTHORIZED;
  }
}

export default UnAuthenticateError;
