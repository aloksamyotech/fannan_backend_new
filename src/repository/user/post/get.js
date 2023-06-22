import moment from "moment"
import { post_model } from "../../../models/schemas/user/Post.js"

export const getById = async (req, res, next) => {
    try {
        const filter = {
            user: req.params.id
        }
        const postdata = await post_model.find(filter)
        if (postdata.length > 0 ) {
            const data = postdata.map((item) => {
                return {
                    _id: item._id,
                    title: item.title,
                    description: item.description,
                    date: moment(item.date).format('YYYY-MM-DD  , LT'),
                }
            })
            return {
                status: 200,
                data: data
            }
        } else {
            return {
                status: 404,
                massege: "Post not found"
            }
        }

    } catch (error) {
        return {
            status: 500,
            massege: "something went wrong"
        }
    }
}