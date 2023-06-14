import { StatusCodes } from "http-status-codes"
import { addUser } from "../../repository/user/user/add_user.js"
import { userLogin } from "../../repository/user/auth/user_login.js"

export class usercontroller {

    async user_regisgtration(req, res) {
        try {
            const data = await addUser(req.body)
            if (data === 0) {
                res.status(StatusCodes.CREATED).json({ massege: "something went wrong" })
            }
            else if (data === 1) {
                res.status(StatusCodes.BAD_REQUEST).json({ massege: "user already exists" })
            }
            else {
                res.status(StatusCodes.CREATED).json({ massege: "user registered successfully" })
            }
        } catch (error) {
            console.log(error)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massege: "server error occured try after some time" })
        }

    }




    async user_login(req, res) {


        const data = await userLogin(req.body)

        if (data === 1) {
            res.status(StatusCodes.BAD_REQUEST).json({ massege: "User Not Found" })
        }
        else if (data === 0) {
            res.status(StatusCodes.BAD_REQUEST).json({ massege: "Wrong Password" })

        } else {

            res.status(StatusCodes.OK).json({ massege: "user logged in successfully", data })
        }


    }

}