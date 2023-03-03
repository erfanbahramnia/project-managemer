const router = require("express").Router();

const  { projectRoutes } = require("./project");
const  { authRoutes } = require("./auth");
const  { teamRoutes } = require("./team");
const  { userRoutes } = require("./user");

router.use("/auth", authRoutes);
router.use("/project", projectRoutes);
router.use("/team", teamRoutes);
router.use("/user", userRoutes);

module.exports = {
    AllRoutes: router,
}