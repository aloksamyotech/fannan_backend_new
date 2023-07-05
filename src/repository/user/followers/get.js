import { CommonMessage } from "../../../helpers/CommonResp.js"
import { StatusCodes } from "../../../helpers/StatusHelper.js"
import { followersModel } from "../../../models/schemas/user/Follow.js"
import { IsUserExist } from "../user/details.js"


const allFollowersOfUser = async (id) => {
    const filter = { following_id: id }
    const count = await followersModel.count(filter)
    return count ? count : 0
}

const allFollowingByUser = async (id) => {
    const filter = { followers_id: id }
    const count = await followersModel.count(filter)
    return count ? count : 0
}

export const getAllFollowers = async (id) => {

    try {

        const isUserExist = await IsUserExist(id)
        if (!isUserExist) {
            return {
                status: StatusCodes.NOT_FOUND,
                message: CommonMessage.UserNotExist
            }
        }

        const total_followers = await allFollowersOfUser(id)
        const total_following = await allFollowingByUser(id)
        const user_data = {
            TotalFollowers: total_followers,
            TotalFollowing: total_following
        }

        return {
            data: user_data,
            status: StatusCodes.OK,
        }
    } catch (error) {
        console.log(error)
        return{
            status : StatusCodes.INTERNAL_SERVER_ERROR,
            message : "Internal Server Error"
        }

    }

}