import { StatusCodes } from "../../../helpers/StatusHelper.js"
import { followersModel } from "../../../models/schemas/user/Follow.js"
import { IsUserExist } from "../user/details.js"

export const Add = async (req, res, next) => {

    try {
        const data = {
            followers_id: req.body.followers_id,
            following_id: req.body.following_id
        }


        const isAlreadyFollowed = async (id) => {
            const filter = {
                followers_id: id,
            }
            const user_data = await followersModel.find(filter)
            for (let i = 0; i < user_data.length; i++) {
                if (user_data[i].followers_id == id) {
                    return true
                }
            }
            return false
        }

        const isFollowersExist = await IsUserExist(data.followers_id)
        if (!isFollowersExist) {
            return {
                status: StatusCodes.NOT_FOUND,
                message: "User does not exist1"
            }
        }

        const isFollowingExist = await IsUserExist(data.following_id)
        if (!isFollowingExist) {
            return {
                status: StatusCodes.NOT_FOUND,
                message: "user does not exist2"
            }
        }

        const isFollowed = await isAlreadyFollowed(data.following_id)
        if (isFollowed) {
            return {
                status : StatusCodes.BAD_REQUEST,
                message : "already-followed"
            }
        }

        const followersData = new followersModel(data)
        await followersData.save()
         return {
            
            status: StatusCodes.CREATED,
            message : "followed successfully"
        }
    } catch (error) {
        console.log(error)

        return {
            status: StatusCodes.INTERNAL_SERVER_ERROR,
            message: "something went wrong"
        }

    }

}