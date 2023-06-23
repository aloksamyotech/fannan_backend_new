import moment from "moment"
import { UserModel } from "../../../models/schemas/user/User.js"

export const getUserByCategory = async (req, res, next) => {

    try {
        const filter = {
            category: req.params.id
        }
        const userdata = await UserModel.find(filter)
        if (userdata) {

            var project = {
                "lastname": "$lastname",
                "firstname": "$firstname",
                "category": "$userdata.title",
                "email": "$email",
                "phone": "$phone",
                "created_at": "$created_at",
                "updated_at": "$updated_at",
                "isvarified": "$isvarified",
                "base_price": "$base_price",
                "category": "$userdata.title",
                "category_id": "$category"

            }
            console.log(req.params.id)
            const user_details = await UserModel.aggregate([
                {
                    $lookup: {
                        from: "categories",
                        localField: "category",
                        foreignField: "_id",
                        as: "userdata",
                    },
                },
                { $unwind: { path: "$userdata" } },
                { $project: project },
            ]);
            const data = user_details.map((item) => {
                return {
                    _id: item._id,
                    firstname: item.firstname,
                    lastname: item.lastname,
                    email: item.email,
                    phone: item.phone,
                    category: item.category,
                    isvarified: item.isvarified,
                    total_views: item.total_views,
                    base_price: item.base_price,
                    created_at: moment(item.created_at).format('YYYY-MM-DD  , LT'),
                    updated_at: moment(item.updated_at).format('YYYY-MM-DD , LT '),
                    category_id: item.category_id
                }
            })
            const userDetails = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].category_id == req.params.id) {
                    userDetails.push(data[i])
                }
            }
            if (userDetails.length > 0) {
                return {
                    data: userDetails,
                    status: 200,
                }
            }
            else {
                return {
                    status: 404,
                    massege: "User not found"
                }
            }
        } else {
            return {
                status: 404,
                massege: "User not found"
            }
        }
    } catch (error) {
        return {
            status: 500,
            massege: "something went wrong"
        }

    }

}