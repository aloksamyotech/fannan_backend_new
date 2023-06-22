import { comment_model } from "../../../models/schemas/user/Comment.js"

export const getfrompostId = async (req, res , next) => {
    try {
        const filter = {
            postid : req.params.id
        }
        console.log(filter)
        const commentdata = await comment_model.find(filter)
        if(commentdata.length > 0) 
        {
            return{
                status : 200,
                data : commentdata 
            }
        }else {
            return{
                status : 400,
                message : "Comment not found"

            }
        }
        
    } catch (error) {

        return {
            status : 500,
            message : "something went wrong"+ error.message
        }
        
    }
}