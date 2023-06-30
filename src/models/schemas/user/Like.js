import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const LikeSchema = mongoose.Schema({
    userid: { type: ObjectId, required: true },
    postid: { type: ObjectId, required: true },
    created_at: { type: Date, default: Date.now },
})

export const like_model = mongoose.model('Like', LikeSchema)