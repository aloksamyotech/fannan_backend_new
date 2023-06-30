import { add } from "../../repository/user/post/add.js"
import { addLike, getLike } from "../../repository/user/post/like.js"
import { getAllPost, getById } from "../../repository/user/post/get.js"
import { UpdatePost } from "../../repository/user/post/update.js"
import { DeletePost } from "../../repository/user/post/delete.js"

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


    GetAllPost = async (req, res) => {
        const data = await getAllPost(req)
        res.status(data.status).json(data)
    }

    UpdatePost = async (req, res) => {
        const data = await UpdatePost(req.params.id, req.body)
        res.status(data.status).json(data)
    }

    DeletePost = async (req, res) => {
        const data = await DeletePost(req.params.id)
        res.status(data.status).json(data)
    }

}