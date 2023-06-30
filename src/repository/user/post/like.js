import { like_model } from "../../../models/schemas/user/Like.js"
import { IsUserExist } from "../user/details.js"
import { GetUserById } from "../user/get_user.js"
import { UpdateLike } from "./add.js"
import { IsPostExist } from "./get.js"

const IsLiked = async (postId, userId) => {
    const filter = {
        postid: postId
    }
    const likeData = await like_model.find(filter)
    for (const item of likeData) {
        if (item.userid == userId) {
            return true;
        }
    }
    return false;
}

export const addLike = async (req, res, next) => {

    try {
        const UserId = req.body.userid
        const isUserExist = await IsUserExist(UserId)
        if (!isUserExist) {
            return {
                status: 404,
                message: "user not found"
            }
        }
        const postId = req.body.postid
        const postData = await IsPostExist(postId)
        if (!postData) {
            return {
                status: 404,
                message: "post not found"
            }
        }
        const isLiked = await IsLiked(postId, UserId)
        if (isLiked) {
            return {
                status: 400,
                message: "you already liked this post"
            }
        }

        const likeData = like_model(req.body)
        const s = await likeData.save()
        await UpdateLike(postId)
        return {
            status: 200,
            message: "Post liked "
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
        const postdata = await post_model.findOne(filter)
        if (postdata) {
            const total_like = postdata.like
            console.log(total_like)
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
        console.log(error)

        return {
            status: 500,
            massege: "something went wrongs" + error.message
        }

    }
}