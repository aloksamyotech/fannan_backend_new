import { post_model } from "../../../models/schemas/user/Post.js"
import { IsPostExist } from "./get.js"

export const UpdatePost = async (post_id, data) => {

    try {
        const isPostExist = await IsPostExist(post_id)
        if (!isPostExist) {
            return {
                status: 404,
                messege: "Post Not Found"
            }
        }
        const filter = {
            _id: post_id
        }
        const updatePost = await post_model.findByIdAndUpdate(
            { _id: post_id },
            data,
            { new: true }
        )
        if (!updatePost) {
            return {
                status: 404,
                messege: "Post Not Found"
            }
        }
        return {
            status: 200,
            massege: "user updated successfully"
        }
    } catch (error) {
        return{
            status:500,
            messege: "something went wrong"
        }
    }
}