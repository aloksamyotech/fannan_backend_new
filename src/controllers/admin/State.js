import { state_model } from "../../models/schemas/admin/State.js"
import StatusCode from "http-status-codes"

export class StateController {

    add_state = async (req, res) => {
        try {

            const statedata = new state_model(req.body)
            const data = await statedata.save()
            res.status(StatusCode.CREATED).json({ massage: "State Added Successfully", data })

        } catch (error) {

            res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ massage: " Something went wrong " })

        }

    }
}