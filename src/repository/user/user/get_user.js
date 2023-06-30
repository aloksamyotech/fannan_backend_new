import { UserModel } from "../../../models/schemas/user/User.js"



export const GetUserById = async (req,res,next) => {
    const filter = {
        _id : req
    }
   const userData = await  UserModel.find(filter)
   return userData
}