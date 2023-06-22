import { addReview } from "../../repository/user/review/add.js"
import { getByUserId } from "../../repository/user/review/get.js"

export class reviewController {

    AddReview = async (req, res) => {
        const data = await addReview(req)
        res.status(data.status).json(data)
    }

    GetReview = async (req, res) => {
        const data = await getByUserId(req)
        res.status(data.status).json(data)
    }




}
