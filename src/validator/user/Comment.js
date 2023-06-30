import Joi from 'joi'

 const messageValidate = Joi.object({
    postid : Joi.string().min(24).max(24).required(),
    userid : Joi.string().min(24).max(24).required(),
    comment : Joi.string().required(),
})

export default messageValidate ; 