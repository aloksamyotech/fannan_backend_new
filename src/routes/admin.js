import express from 'express'
import { Category_controller} from '../controllers/user/Category.js';
import { StateController } from '../controllers/admin/State.js';
import { CityController } from '../controllers/admin/City.js';

const AdminRouter = express.Router()



// Category

const category_controller = new Category_controller
AdminRouter.post("/admin/add/category", category_controller.AddCategory)
AdminRouter.get("/admin/get/all/category", category_controller.AllCategory)



// States 

const state_controller = new StateController
AdminRouter.post("/admin/add/state", state_controller.AddState)
AdminRouter.get("/admin/get/all/state", state_controller.GetAllState)






// Citys 

const city_controller = new CityController

AdminRouter.post("/admin/add/city", city_controller.AddCity)
AdminRouter.get("/admin/get/all/city", city_controller.GetAllCity)
AdminRouter.get("/admin/get/city/bystate/:id", city_controller.GetCityByState)



export default AdminRouter; 