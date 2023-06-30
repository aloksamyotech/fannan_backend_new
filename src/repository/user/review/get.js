import { review_model } from "../../../models/schemas/user/RateReview.js"
import moment from "moment"


export const getByUserId = async (req, res, next) => {
    try {
        const filter = {
            userid: req.params.id
        }
        console.log(filter)
        const reviewdata = await review_model.find(filter)
        if (reviewdata.length > 0) {
            const data = reviewdata.map((item)=>{
                let current_date = (moment(new Date()))
                let comment_date = moment(item.date)
                let result = ""
                if (moment(new Date()).diff(moment(item.date), 'minutes') < 1) {
                    result = "just now"
                }
                else if (current_date.diff(comment_date, 'minutes') < 59) {
                    result = current_date.diff(comment_date, 'minutes') +  'm ago'
                }
                else if (current_date.diff(comment_date, 'hours') < 24) {
                    result = current_date.diff(comment_date, 'hours') +   'h ago'
                } else if (current_date.diff(comment_date, 'days') < 7) {
                    result = current_date.diff(comment_date, 'days') + 'd ago'
                } else if (current_date.diff(comment_date, 'days') > 7) {
                    result = current_date.diff(comment_date, 'weeks') +  'w ago'
                }
                return {
                    _id: item._id,
                    rating: item.rate,
                    review: item.review,
                    date: result,
                }
            })
            return {
                status: 200,
                data: data
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