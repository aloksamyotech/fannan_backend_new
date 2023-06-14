import { StatusCodes } from "http-status-codes"
import { UserModel } from "../../models/schemas/user/User.js"
import { allCategory } from "../../repository/admin/category/get.js"
import { addCategory } from "../../repository/admin/category/add.js"

export class Category_controller {



    AddCategory = async (req,res) =>{

        const data = await addCategory(req)
        console.log(data)
        res.status(data.status).json( data.data)

    }


    AllCategory = async (req,res) =>{
         

                const data =  await allCategory(req)
                res.status(data.status).json(data)
    }


    // harhsit



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