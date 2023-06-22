import {add}  from "../../repository/user/comment/add.js"
import { getfrompostId} from "../../repository/user/comment/get.js"

export class commentController {


    addComment = async (req , res ) => {
        const data = await add(req)
        res.status(data.status).json(data)
    }

    getCommentByPostid = async (req , res ) => {
        const data = await getfrompostId(req)
        res.status(data.status).json(data)
    }
}