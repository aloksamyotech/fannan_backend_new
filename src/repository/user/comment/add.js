import { comment_model } from "../../../models/schemas/user/Comment.js"

export const add = async (req, res, next) => {
    try {
        const commentdata = new comment_model(req.body)
        await commentdata.save()
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