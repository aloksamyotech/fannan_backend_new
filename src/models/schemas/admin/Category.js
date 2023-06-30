import mongoose from "mongoose";
const CategorySchema = mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: false, default: 0 },
    image: { type: String , required: false, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcTjTYp4GhbRBOJAKhNTXl6To5NndjBXK6wULh-uDag&usqp=CAU&ec=48665699" },
    

});

export const category_model = mongoose.model('Category', CategorySchema);     