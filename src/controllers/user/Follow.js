import { Add } from "../../repository/user/followers/add.js"
import { getAllFollowers } from "../../repository/user/followers/get.js"

export class followersController {


    Add = async(req,res) => {
        const data = await Add(req)
        res.status(data.status).json(data)
    }

    Get = async(req,res) => {
        const data = await getAllFollowers(req.params.id)
        res.status(data.status).json(data)
    }
}