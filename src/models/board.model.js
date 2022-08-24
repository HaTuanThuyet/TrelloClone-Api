import Joi from "joi";
import { getDb } from "../config/mongodb.js";
const boardCollectionName = 'boards'
const boardCollectionSchema = Joi.object({
    title: Joi.string().required().min(3).max(20).trim(),
    columnOrder: Joi.array().items(Joi.string()).default([]),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false)
})
const validateSchema = async (data) => {
    return await boardCollectionSchema.validateAsync(data, { abortEarly: false })
}
// const findOneById = async (id)=>{
//     try {
//         const result = await getDb().collection(boardCollectionName).findOne({_id: ObjectID(id)})
//         return result
//     } catch (error) {

//     }
// }
const createNew = async (data) => {
    try {
        const value = await validateSchema(data)
        const result1 = await getDb().collection(boardCollectionName).insertOne(value)
        // const result= findOne(result1.insertId) 
        return result1
    } catch (error) {
        throw new Error(error)
    }
}
export const BoardModel = { createNew, }
