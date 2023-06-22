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
      const data = user_details.map((e) => {
          return {
            id: e._id,
            firstname: e.firstname,
            lastname: e.lastname,
            email: e.email,
            phone: e.phone,
            base_price: e.base_price,
            category : e.category, 
            created_at: moment(e.created_at).format("MMMM Do YYYY, h:mm:ss a"), 
          }
      })
      const userDetails = []
      for (let i = 0; i < data.length; i++) {
          if (data[i].email == userdata.email) {
              userDetails.push(data[i])
          }
      }

      return {
        status: 200,
        massege: "User Logged in successfully",
        data: userDetails
      };
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