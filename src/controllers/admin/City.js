import StatusCode from 'http-status-codes'
import { city_model } from '../../models/schemas/admin/City.js'
export class CityController {

    AddCity = async (req, res) => {
        try {
            const citydata = new city_model(req.body)
            const data = await citydata.save()
            res.status(StatusCode.CREATED).json({ massege: "city added successfully", data })
        } catch (error) {
            res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ massege: "Something went wrong" })
        }
    }


    GetAllCity = async (req, res) => {

        try {
            const data = await  city_model.find()
            res.status(StatusCode.OK).json({citydata  : data } )
        } catch (error) {
            console.log(error)
            res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ massege: "Something went wrong" })
        }
    }     


    GetCityByState = async (req, res) => {
        try {
            const data = await  city_model.find({state:req.params.id})
            res.status(StatusCode.OK).json(data) 
        } catch (error) {
            console.log(error)
            res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ massege: "Something went wrong" })
        }
    }
}