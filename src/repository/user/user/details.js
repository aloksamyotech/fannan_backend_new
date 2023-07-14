import { UserModel } from "../../../models/schemas/user/User.js"
import moment from "moment"

export const detailsById = async (req, res, next) => {
    try {

        const isUserExist = await IsUserExist(req)
        if (!isUserExist) {
            return {
                status: 404,
                message: "User does not exist"
            }
        }
        const filter = {
            _id: req
        }


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
            "category": "$userdata.title"

        }
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
            }

        })
        const userDetails = []
        for (let i = 0; i < data.length; i++) {
            if (data[i]._id == req) {
                userDetails.push(data[i])
            }
        }

        return {
            status: 200,
            data: userDetails,
        }



    } catch (error) {
        console.log(error)
        return {
            status: 500,
            massege: "something went wrong" + error.message
        }
    }
}

export const IsUserExist = async (id) => {
    const filter = {
        _id: id,
    }
    const user = await UserModel.findById(filter)
    if (user) {
        return true;
    }
    else {
        return false;
    }
}