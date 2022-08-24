import { BoardService } from "../services/board.service.js"
import { HttpStatusCode } from "../utilities/constant.js"

const createNew = async (req,res) =>{
    try {
        const result= await BoardService.createNew(req.body)
        console.log(result)
        res.status(HttpStatusCode.OK)
    } catch (error) {
        console.log(error)
        res.status(HttpStatusCode.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}
export const BoardController = {createNew}