import { UserModel } from "../../../models/schemas/user/User.js"

export const updateProfile = async (req, res, next) => {

    req.body.updated_at = new Date()

    try {
        const updatedUser = await UserModel.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        if (updatedUser) {
            return {
                status: 200,
                massege: "user updated successfully"
            }
        } else {
            return {
                status: 400,
                massege: "user not found"
            }
        }
    } catch (error) {

    }




}