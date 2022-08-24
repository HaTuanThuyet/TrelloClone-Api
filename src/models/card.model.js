// import { ObjectID } from "bson";
import Joi from "joi";
import { getDb } from "../config/mongodb.js";
const CardCollectionName='cards'
const CardCollectionSchema= Joi.object({
    boardId:Joi.string().required(),
    columnId:Joi.string().required(),
    title: Joi.string().required().min(3).max(30).trim(),
    cover:Joi.string().default(null),
    createdAt:Joi.date().timestamp().default(Date.now()),
    updatedAt:Joi.date().timestamp().default(null),
    _destroy:Joi.boolean().default(false)

})
const validateSchema = async (data)=>{
    return await CardCollectionSchema.validateAsync(data, { abortEarly:false})
}
// const findOneById = async (id)=>{
//     try {
//         const result = await getDb().collection(CardCollectionName).findOne({_id: ObjectID(id)})
//         return result
//     } catch (error) {
        
//     }
// }
const createNew = async (data)=>{
    try {
        const value= await validateSchema(data)
        const result = await getDb().collection(CardCollectionName).insertOne(value)
        return result.pos[0]
    } catch (error) {
        throw new Error(error)
    }
}
export const CardModel = {createNew}
