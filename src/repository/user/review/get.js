import { review_model } from "../../../models/schemas/user/RateReview.js"

export const getByUserId = async (req, res, next) => {
    try {

        const filter = {
            userid: req.params.id
        }
        console.log(filter)
        const reviewdata = await review_model.find(filter)
        if (reviewdata.length > 0) {
            return {
                status: 200,
                data: reviewdata
            }
        }
        else {
            return {
                status: 400,
                massege: "Review not found"
            }
        }

    } catch (error) {
        return {
            status: 500,
            message: "something went wrong" + " " + error.message
        }
    }
} 