import { BoardModel } from "../models/board.model.js"
const createNew = async (data)=>{
    try {
        const result = await BoardModel.createNew(data)
        // const getNewBoard = await BoardModel.createNew()
        return result
    } catch (error) {
        throw new Error(error)
    }
}
export const BoardService = {createNew}