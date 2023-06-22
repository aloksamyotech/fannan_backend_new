import { category_model } from "../../../models/schemas/admin/Category.js"

export const addCategory = async  (req) =>
{
    try {
        console.log(req.body)
        let category_data = category_model(req.body)
        const data = await category_data.save() 
        console.log(data)  

        return {
            data , 
            massege : "successfully added",
            status : 200
        } 
    } catch (error) {
        console.log(error)
        return {
            massege : "something went wrong",
            status : 500
        }
    }
   
      
}