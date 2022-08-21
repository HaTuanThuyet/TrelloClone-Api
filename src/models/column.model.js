import Joi from "joi";
import { getDb } from "../config/mongodb.js";
const ColumnCollectionName='columns'
const ColumnCollectionSchema= Joi.object({
    boardId:Joi.tring().required(),
    title: Joi.string().required().min(3).max(20),
    columnOrder:Joi.array().items(Joi.string()).default([]),
    createdAt:Joi.date().timestamp().default(Date.now()),
    updatedAt:Joi.date().timestamp().default(null),
    _destroy:Joi.boolean().default(false)
})
const validateSchema = async (data)=>{
    return await ColumnCollectionSchema.validateAsync(data, { abortEarly:false})
}
const createNew = async (data)=>{
    try {
        const value= await validateSchema(data)
        const result = await getDb().collection(ColumnCollectionName).insertOne(value)
        return result.ops[0]
    } catch (error) {
        console.log(error)
    }
}
export const ColumnModel = {createNew}
