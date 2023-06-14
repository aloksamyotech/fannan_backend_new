import { category_model } from "../../../models/schemas/admin/Category.js"

export const allCategory = async (req) =>
{
         try {
            const category_data = await category_model.find()
            const detail = {
                data : category_data,
                status : 200,
                message : "all category data "
            }
            return detail
            
         } catch (error) {
            const detail =  {
            data : [] , 
            massege : "No data found",
            status : 404 
            }
            return detail
         }
}