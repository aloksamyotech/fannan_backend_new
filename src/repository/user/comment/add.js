import { comment_model } from "../../../models/schemas/user/Comment.js"
import { IsPostExist } from "../post/get.js"
import { IsUserExist } from "../user/details.js"

export const add = async (req, res, next) => {
    try {
        const user_id = req.body.userid
        const isUserExist = await IsUserExist(user_id)
        if (!isUserExist) {
            return {
                status: 404,
                message: "User does not exist"
            }
        }
        const post_id = req.body.postid
        const isPostExist = await IsPostExist(post_id)
        if (!isPostExist) {
            return {
                status: 404,
                message: "Post does not exist"
            }
        }
        const CommentData = new comment_model(req.body)
        await CommentData.save()
        return {
            status: 200,
            message: "comment added successfully"
        }
    } catch (error) {
        return {
            status: 500,
            message: "something went wrong"
        }
    }
}