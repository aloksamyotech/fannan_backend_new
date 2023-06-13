import { UserModel } from "../../../models/schemas/user/User.js"
import bcrypt from 'bcrypt'
import mongoose from "mongoose"

export const addUser = async (data) => {

    try {
        const check_user = await UserModel.findOne({ email: data.email })
        if (!check_user) {
            data.password = await bcrypt.hash(data.password, 10)
            console.log(data)
            const userdata = UserModel(data)
            const user = await userdata.save()
            return user;
        }
        else {

            return 1;
        }

    } catch (error) {
        console.log(error)
        return 0;
    }


}