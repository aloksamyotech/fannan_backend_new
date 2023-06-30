import { post_model } from "../../../models/schemas/user/Post.js"

export const add = async (req, res, next) => {


    try {
        const postdata = post_model(req.body)
        post_model(req.body)
        await postdata.save()
        return {
            status: 201,
            massege: " post added successfully"
        }

    } catch (error) {
        return {
            status: 500,
            massege: "something went wrong " + error.message
        }

    }

}


export  const UpdateLike = async (postId) => { 
    const postData = await post_model.find({ _id: postId})
        postData[0].like = postData[0].like + 1
        const updatedPost = await post_model.findOneAndUpdate(
            { _id: postId},
            postData[0],
            { new: true }
        )
}