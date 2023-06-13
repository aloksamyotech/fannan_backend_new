import mongoose from "mongoose";
const StateSchema = mongoose.Schema({

    name: { type: String, required: true },
    abbreviation: { type: String, required: true },

});

export const state_model = mongoose.model('State', StateSchema);