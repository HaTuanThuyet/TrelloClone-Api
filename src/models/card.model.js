import Joi from "joi";
import { getDb } from "../config/mongodb.js";
const CardCollectionName='cards'
const CardCollectionSchema= Joi.object({
    boardId:Joi.tring().required(),
    columnId:Joi.tring().required(),
    title: Joi.string().required().min(3).max(20),
    cover:Joi.string().default(null),
    createdAt:Joi.date().timestamp().default(Date.now()),
    updatedAt:Joi.date().timestamp().default(null),
    _destroy:Joi.boolean().default(false)

})
const validateSchema = async (data)=>{
    return await CardCollectionSchema.validateAsync(data, { abortEarly:false})
}
const createNew = async (data)=>{
    try {
        const value= await validateSchema(data)
        const result = await getDb().collection(CardCollectionName).insertOne(value)
        return result.ops[0]
    } catch (error) {
        console.log(error)
    }
}
export const CardModel = {createNew}
