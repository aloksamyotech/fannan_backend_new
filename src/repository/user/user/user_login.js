import { UserModel } from "../../../models/schemas/user/User.js";
import moment from "moment";
import bcrypt from "bcrypt";
export const userLogin = async (req) => {
  const userdata = await UserModel.findOne({ email: req.email });
  if (userdata) {
    const user_password = await bcrypt.compare(req.password, userdata.password);
    if (user_password) {
      var project = {
        "lastname": "$lastname",
        "firstname": "$firstname",
        "category": "$userdata.title",
        "email": "$email",
        "base_price": "$base_price",
        "phone": "$phone",
        "created_at": "$created_at"
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
      let userDetails = user_details.filter(item => item.email == userdata.email).map((e) => {
        return {
          id: e._id,
          firstname: e.firstname,
          lastname: e.lastname,
          email: e.email,
          phone: e.phone,
          base_price: e.base_price,
          category: e.category,
          created_at: moment(e.created_at).format("DD MMMM YYYY, h:mm:ss a"),
        }
      })
      if (userDetails.length  > 0) {
        return {
          status: 200,
          massege: "User Logged in successfully",
          data: userDetails
        };
      }
      else {
        return {
          status: 404,
          massege: "user not found ",
        }
      }

    } else {
      return {
        status: 400,
        massege: "Wrong password",
        data: []
      };
    }
  } else {
    return {
      status: 404,
      massege: "user not found ",
      data: []
    }
  }
};