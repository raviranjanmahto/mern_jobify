import express from "express";

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJobs,
  showStats,
} from "../controllers/jobsController.js";

const router = express.Router();

router.route("/").post(createJob).get(getAllJobs);
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJobs);

export default router;
