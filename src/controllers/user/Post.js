import { add } from "../../repository/user/post/add.js"
import { addLike, getLike } from "../../repository/user/post/like.js"
import { getById } from "../../repository/user/post/get.js"

export class postController {


    AddPost = async (req, res) => {
        const data = await add(req)
        res.status(data.status).json(data)
    }

    GetPostById = async (req, res) => {
        const data = await getById(req)
        res.status(data.status).json(data)
    }


    AddLike = async (req, res) => {
        const data = await addLike(req)
        res.status(data.status).json(data)
    }


    GetLike = async (req, res) => {
        const data = await getLike(req)
        res.status(data.status).json(data)
    }


}