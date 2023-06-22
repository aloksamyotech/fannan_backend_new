import { post_model } from "../../../models/schemas/user/Post.js"

export const addLike = async (req, res, next) => {
    try {
        const filter = {
            _id: req.params.postid
        }
        const postdata = await post_model.findOne(filter)
        postdata.like = postdata.like + 1
        const updatedPost = await post_model.findOneAndUpdate(
            { _id: req.params.postid },
            postdata ,
            { new: true }
        )
        return {
            status: 200,
            data: updatedPost
        }
    } catch (error) {
        return {
            status: 500,
            massege: "something went wrong" + error.message
        }

    }
}


export const getLike = async (req, res, next) => {
    try {
        const filter = {
            _id: req.params.postid
        }
        console.log(filter)
        const postdata  = await post_model.findOne(filter)
        console.log(postdata)
        if (postdata)
        {
           const  total_like = postdata.like
            return {
                status: 200,
                data: total_like
            }
        }
        else {
            return {
                status: 404,
                message: "post not found"
            }
        }
      
    } catch (error) {

        return {
            status: 500,
            massege: "something went wrong" + error.message
        }

    }
}