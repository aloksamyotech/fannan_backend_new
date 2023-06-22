import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const UserSchema = mongoose.Schema({

    firstname: { type: String, required: true, default: "" },
    lastname: { type: String, required: true },
    email: { type: String, required: true, trim: true, default: "" },
    phone: { type: String, required: false, trim: true, default: "" },
    password: { type: String, trim: true, required: true },
    isvarified: { type: Boolean, required: false, default: 1 }, // 0 - not verified 1- varified 
    country: { type: String, required: false , default : "India"},
    state: { type: ObjectId, required: false },
    city: { type: ObjectId, required: false },
    base_price: { type: Number, required: false , default : 100 },
    category: { type: ObjectId, required: true },
    img_url: { type: String, required: false  ,},
    web_url: { type: String, required: false },
    fb_url: { type: String, required: false },
    total_views : { type: Number, required: false , default: 0 },
    insta_url: { type: String, required: false },
    linkding_url: { type: String, required: false },
    last_opt: { type: String, required: false },
    status: { type: Number, required: false },
    created_at: { type: Number, required: false, default: new Date().getTime() },
    updated_at: { type: Number, required: false, default: new Date().getTime()},

});

export const UserModel = mongoose.model('User', UserSchema);