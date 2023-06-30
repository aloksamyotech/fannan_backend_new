import { UserModel } from "../../../models/schemas/user/User.js"

export const applyfilter = async (req, res, next) => {
    try {


        let filter = ['6489366529ad0b43186339ea',"6489367929ad0b43186339ec"]

        const filterdata = await  UserModel.aggregate([

            {
                $match: {
                    category: {
                        $in: filter
                    }
                }
            }

        ])


        console.log(filterdata)
        return {
            status: 200,
            data: filterdata
        }


    } catch (error) {

        return {
            status: 500,
            message: error.message
        }

    }
}