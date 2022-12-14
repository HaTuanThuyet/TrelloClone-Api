import express from "express"
import { CardController } from "../../controller/card.controler.js"
import { CardValidation } from '../../validations/card.validation.js'
const router = express.Router()
router.route('/')
    .post(CardValidation.createNew, CardController.createNew)

export const cardRoutes = router