import moment from "moment"
import { post_model } from "../../../models/schemas/user/Post.js"
import { detailsById } from "../user/details.js"





export const getById = async (req, res, next) => {
    try {
        const filter = {
            user: req.params.id
        }
        const postdata = await post_model.find(filter).sort({ date: -1 })
        if (postdata.length > 0) {
            const data = postdata.map((item) => {

                let current_date = (moment(new Date()))
                let comment_date = moment(item.date)
                let result = ""
                if (moment(new Date()).diff(moment(item.date), 'minutes') < 1) {
                    result = "just now"
                }
                else if (current_date.diff(comment_date, 'minutes') < 59) {
                    result = current_date.diff(comment_date, 'minutes') + 'm ago'
                }
                else if (current_date.diff(comment_date, 'hours') < 24) {
                    result = current_date.diff(comment_date, 'hours') + 'h ago'
                } else if (current_date.diff(comment_date, 'days') < 7) {
                    result = current_date.diff(comment_date, 'days') + 'd ago'
                } else if (current_date.diff(comment_date, 'days') > 7) {
                    result = current_date.diff(comment_date, 'weeks') + 'w ago'
                }
                return {
                    _id: item._id,
                    title: item.title,
                    description: item.description,
                    like: item.like,
                    date: result,
                    user_id: item.user,

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


export const IsPostExist = async (post_id) => {
    filter = {
        _id: post_id
    }
    const postData = await post_model.find(filter)
    postData.length > 0 ? true : false
}

export const getAllPost = async () => {
    const AllPost = await post_model.aggregate([
        {
            $lookup: {
                from: "users",
                localField: "user",
                foreignField: "_id",
                as: "userdata",
            },
        },
        { $unwind: { path: "$userdata" } },
        { $sort: { date: -1 } }

    ]);
    if (AllPost.length > 0) {
        const data = AllPost.map((item) => {
            let current_date = (moment(new Date()))
            let comment_date = moment(item.date)
            let result = ""
            if (moment(new Date()).diff(moment(item.date), 'minutes') < 1) {
                result = "just now"
            }
            else if (current_date.diff(comment_date, 'minutes') < 59) {
                result = current_date.diff(comment_date, 'minutes') + 'm ago'
            }
            else if (current_date.diff(comment_date, 'hours') < 24) {
                result = current_date.diff(comment_date, 'hours') + 'h ago'
            } else if (current_date.diff(comment_date, 'days') < 7) {
                result = current_date.diff(comment_date, 'days') + 'd ago'
            } else if (current_date.diff(comment_date, 'days') > 7) {
                result = current_date.diff(comment_date, 'weeks') + 'w ago'
            }
            return {
                _id: item._id,
                title: item.title,
                description: item.description,
                like: item.like,
                userdata: {
                    username : item.userdata.firstname + " " + item.userdata.lastname,
                    userid : item.userdata._id
                },
                date: result,
            }
        })

        return {
            status: 200,
            data: data
        }

    }
}