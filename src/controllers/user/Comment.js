import { add } from "../../repository/user/comment/add.js"
import { getfrompostId } from "../../repository/user/comment/get.js"
import messageValidate from "../../validator/user/Comment.js"

export class commentController {


    addComment = async (req, res) => {
        const { error } = messageValidate.validate(req.body)
        if (!error) {
            const data = await add(req)
            res.status(data.status).json(data)
        }
        else {
            res.status(400).json({ error: error.details[0].message })

        }
    }

    getCommentByPostid = async (req, res) => {
        const data = await getfrompostId(req.params.id)
        res.status(data.status).json(data)
    }
}