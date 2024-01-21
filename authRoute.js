
const express = require("express");
const authRouter = express.Router();
// const jwtAuth = require("../middleware/jwtAuth.js");

const {signUp} = require("../controller/authControler");

authRouter.post("/signup", signUp);


module.exports = authRouter;
