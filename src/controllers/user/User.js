import { addUser } from "../../repository/user/user/add_user.js"
import { userLogin } from "../../repository/user/user/user_login.js"
import { updateProfile } from "../../repository/user/user/update_profile.js"
import { getUserByCategory } from "../../repository/user/user/user_by_category.js"
import { detailsById } from "../../repository/user/user/details.js"
import { applyfilter } from "../../repository/user/user/filter.js"

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
        const data = await detailsById(req.params.id)
        res.status(data.status).json(data)
    } 

    GetUserByFilter = async (req, res) => {
        const data = await applyfilter(req)
        res.status(data.status).json(data)
    }
}