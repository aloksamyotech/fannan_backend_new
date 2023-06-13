// import express from "express";
// import { usercontroller } from "../controllers/user/User.js";

const UserRouter = express.Router();

// User Registration

import express from "express";
import { usercontroller } from "../controllers/user/User.js";
import { Category_controller } from "../controllers/user/Category.js";

// Get users by category id

// UserRouter.get("/user/by/category/:id");

// User Registration



const UserController = new usercontroller
UserRouter.post("/user/register", UserController.user_regisgtration)
UserRouter.post("/user/login", UserController.user_login)
UserRouter.put("/user/update/profile/:id", UserController.update_profile)


export default UserRouter;
