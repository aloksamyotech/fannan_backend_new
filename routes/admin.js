import express from 'express'
import { usercontroller } from '../controllers/user/User.js';
import { CategoryController } from '../controllers/admin/Category.js';
import { StateController } from '../controllers/admin/State.js';
import { CityController } from '../controllers/admin/City.js';

const AdminRouter = express.Router()



// Category

const category_controller = new CategoryController
AdminRouter.post("/admin/add/category", category_controller.add_category)
AdminRouter.get("/admin/get/all/category", category_controller.get_category)



// States 

const state_controller = new StateController
AdminRouter.post("/admin/add/state", state_controller.add_state)




// Citys 

const city_controller = new CityController
AdminRouter.post("/admin/add/city", city_controller.add_city)


export default AdminRouter; 