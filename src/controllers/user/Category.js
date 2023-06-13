import { StatusCodes } from "http-status-codes"
import { UserModel } from "../../models/schemas/user/User.js"

export class Category_controller {

    CategoryById = async (req, res) => {

        try {
            const filter = {
                category: req.params.id
            }

            const userdata = await UserModel.find(filter)
            res.status(StatusCodes.OK).json(userdata)


        } catch (error) {


            res.status(StatusCodes.OK).json({ massege: " Something Went Wrong " })

        }


    }
}