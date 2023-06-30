import moment from "moment"
import { comment_model } from "../../../models/schemas/user/Comment.js"

export const getfrompostId = async (post_id) => {
    try {
        const filter = {
            postid: post_id
        }
        const CommnetData = await comment_model.find(filter)
        const data = CommnetData.map((item) => {
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
            return (
                {
                    _id: item._id,
                    comment: item.comment,
                    date: result
                }
            )
        })
        return {
            data: data,
            status: 200
        }
    } catch (error) {
        return {
            status: 500,
            message: "something went wrong" + error.message
        }
    }
}