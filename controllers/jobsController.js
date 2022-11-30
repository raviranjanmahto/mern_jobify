import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticateError } from "../errors/index.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all values!");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
const deleteJob = (req, res) => {
  res.send("deleteJob job");
};
const getAllJobs = (req, res) => {
  res.send("get all job");
};
const updateJobs = (req, res) => {
  res.send("update job");
};
const showStats = (req, res) => {
  res.send("showStats job");
};

export { createJob, deleteJob, getAllJobs, updateJobs, showStats };
