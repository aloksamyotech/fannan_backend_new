import mongoose from 'mongoose';


const FollowersSchema = mongoose.Schema({
    followers_id : {type : mongoose.Schema.Types.ObjectId , required: true},
    following_id : {type : mongoose.Schema.Types.ObjectId , required: true},

})

export const followersModel = mongoose.model("Follower", FollowersSchema)