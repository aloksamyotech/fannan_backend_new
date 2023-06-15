import { StatusCodes } from "http-status-codes"
import { addUser } from "../../repository/user/user/add_user.js"
import { userLogin } from "../../repository/user/user/user_login.js"
import { UserModel } from "../../models/schemas/user/User.js"

export class usercontroller {

    async UserRegistration(req, res) {
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

    async UserLogin(req, res) {
        const data = await userLogin(req.body)
        res.status(200).json(data)
    }

    async UpdateProfile(req, res) {
        try {
            console.log(req.body)
            console.log(req.params.id)
            UserModel.findOneAndUpdate(
                { _id : req.params.id}, // Filter for the document you want to update
                req.body, // Update the email field
                { new: true } // Set to true if you want to return the updated document
              )
                .then((updatedUser) => {
                  if (updatedUser) {
                    console.log('Updated user:', updatedUser);
                    res.status(StatusCodes.OK).json(updatedUser)
                  } else {
                    res.status(StatusCodes.BAD_REQUEST).json({massege:"user not found"})
                    console.log('User not found');
                  }
                })
        } catch (error) {
            console.log(error)
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ massege: "something went wrong " })
        }
    }

}