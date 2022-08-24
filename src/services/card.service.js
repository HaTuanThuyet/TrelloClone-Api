import { CardModel } from "../models/card.model.js"
const createNew = async (data)=>{
    try {
        const result = await CardModel.createNew(data)
        // const getNewBoard = await BoardModel.createNew()
        return result
    } catch (error) {
        throw new Error(error)
    }
}
export const CardService = {createNew}