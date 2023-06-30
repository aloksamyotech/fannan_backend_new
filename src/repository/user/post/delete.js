import { post_model } from "../../../models/schemas/user/Post.js"
import { IsPostExist } from "./get.js"

export const DeletePost = async (id) => {

    try {
        const isPostExist = await IsPostExist(id)
        if (!isPostExist) {
            return {
                status: 404,
                message: "Post Not Found",
            }
        }
        const filter = { _id: id }
        await post_model.findByIdAndDelete(filter)
        return {
            status: 200,
            message: "Post Deleted Successfully"
        }
    } catch (error) {
        return {
            status: 500 , 
            message: "Something went wrong"
        }

    }

}