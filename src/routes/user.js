import express from "express";
import { usercontroller } from "../controllers/user/User.js";
import { postController } from "../controllers/user/Post.js";
import { commentController } from "../controllers/user/Comment.js";
import { reviewController } from "../controllers/user/Review.js";
const UserRouter = express.Router();

// User Registration

const UserController = new usercontroller
UserRouter.post("/user/register", UserController.UserRegistration)
UserRouter.post("/user/login", UserController.UserLogin)
UserRouter.put("/user/update/profile/:id", UserController.UpdateProfile)
UserRouter.get("/user/get/user/category/:id" , UserController.GetUserByCategory)
UserRouter.get("/user/get/details/:id", UserController.GetUserDetailsById)
UserRouter.get("/user/get/user/filter" , UserController.GetUserByFilter)


// User Post 

const PostControler = new postController
UserRouter.post("/user/add/post" , PostControler.AddPost)
UserRouter.get("/user/get/post/byid/:id", PostControler.GetPostById)
UserRouter.post("/user/add/like", PostControler.AddLike)
UserRouter.get("/user/get/post/like/:postid", PostControler.GetLike)
UserRouter.get("/user/get/all/post" , PostControler.GetAllPost)



// Comment on post 

const CommentControler = new commentController

UserRouter.post("/user/add/comment" , CommentControler.addComment)
UserRouter.get("/user/get/comment/bypostid/:id" , CommentControler.getCommentByPostid)


// Rate & Review 


const ReviewControler = new reviewController 

UserRouter.post("/user/add/review", ReviewControler.AddReview)
UserRouter.get("/user/get/review/byuserid/:id", ReviewControler.GetReview)


// Like 

// const likeControler = new postController

// UserRouter.post("/user/add/like", likeControler.AddLike)



export default UserRouter;
