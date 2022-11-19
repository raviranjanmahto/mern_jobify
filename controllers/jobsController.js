const createJob = (req, res) => {
  res.send("create job");
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
