import mongoose from "mongoose";

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const CitySchema = mongoose.Schema({

    name: { type: String, required: true },
    state: { type: ObjectId, required: true }

});

export const city_model = mongoose.model('City', CitySchema);