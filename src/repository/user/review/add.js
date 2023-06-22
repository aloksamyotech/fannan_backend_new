import { review_model } from "../../../models/schemas/user/RateReview.js"
import { UserModel } from "../../../models/schemas/user/User.js"

export const addReview = async (req, res, next) => {
    try {

        const filter = {
            _id: req.body.userid,
        }
        const userdata = await UserModel.findById(filter)
        if (userdata) {
            const reviewdata = new review_model(req.body)
            await reviewdata.save()
            return {
                status: 200,
                message: "Review added successfully"
            }
        }
        else {
            return {
                status: 404,
                message: "User not found"
            }
        }

    } catch (error) {

        return {
            status: 500,
            message: "something went wrong" + " " + error.message
        }

    }
}