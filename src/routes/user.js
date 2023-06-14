// import express from "express";
// import { usercontroller } from "../controllers/user/User.js";

const UserRouter = express.Router();

// User Registration

import express from "express";
import { usercontroller } from "../controllers/user/User.js";
import { Category_controller } from "../controllers/user/Category.js";



// User Registration

const UserController = new usercontroller
UserRouter.post("/user/register", UserController.UserRegistration)
UserRouter.post("/user/login", UserController.UserLogin)
UserRouter.put("/user/update/profile/:id", UserController.UpdateProfile)


export default UserRouter;
