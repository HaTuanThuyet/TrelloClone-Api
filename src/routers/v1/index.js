import express from "express"
import { BoardController } from "../../controller/board.controler.js"
import {BoardValidation} from '../../validations/board.validation.js'
const router = express.Router()
router.route('/')
    // .get((req, res) => console.log('GET boards'))
    .post(BoardValidation.createNew,BoardController.createNew)

export const boardRoutes = router