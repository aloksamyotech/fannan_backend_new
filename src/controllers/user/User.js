import { addUser } from "../../repository/user/user/add_user.js"
import { userLogin } from "../../repository/user/user/user_login.js"
import { updateProfile } from "../../repository/user/user/update_profile.js"
import { getUserByCategory } from "../../repository/user/user/user_by_category.js"
import { detailsById } from "../../repository/user/user/details.js"

export class usercontroller {

    async UserRegistration(req, res) {
        const data = await addUser(req.body)
        res.status(data.status).json(data)
    }

    async UserLogin(req, res) {
        const data = await userLogin(req.body)
        res.status(data.status).json(data)
    }

    async UpdateProfile(req, res) {
        const data = await updateProfile(req)
        console.log(data)
        res.status(data.status).json(data)
    }

    GetUserByCategory = async (req, res) => {
        const data = await getUserByCategory(req)
        res.status(data.status).json(data)
    }

    GetUserDetailsById = async (req, res) => {
        const data = await detailsById(req)
        res.status(data.status).json(data)
    }

    AddUserLikes = async (req, res) => {
        const data = await like(req)
        res.status(data.status).json(data)
    }
}