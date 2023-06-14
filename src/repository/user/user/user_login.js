import { UserModel } from "../../../models/schemas/user/User.js";
import moment from "moment";
import bcrypt from "bcrypt";

export const userLogin = async (req) => {
    const userdata = await UserModel.findOne({ email: req.email });
  
    if (userdata) {
      const user_password = await bcrypt.compare(req.password, userdata.password);
  
      if (user_password) {

 
        const user_details = await UserModel.aggregate([
          { $match: { email: req.email } },
          {
            $lookup: {
              from: "categories",
              localField: "category",
              foreignField: "_id",
              as: "userdata",
            },
          },
          { $unwind: { path: "$userdata" } },
        ]);
  
        const details = {
          id: user_details[0]._id,
          firstname: user_details[0].firstname,
          lastname: user_details[0].lastname,
          email: user_details[0].email,
          phone: user_details[0].phone,
          category: user_details[0].userdata.title,
          created_at: moment(user_details.created_at).format(
            "MMMM Do YYYY, h:mm:ss a"
          ), // June 8th 2023, 7:39:08 pm
        };
  
        return {
            status : 200 , 
            massege : "Loged in successfully",
            data : details
          };
      } else {
        return {
            status : 400 , 
            massege : "Wrong password",
            data : []
          };
      }
    } else {
      return {
        status : 404 , 
        massege : "user not found ",
        data : []
      }
    }
  };