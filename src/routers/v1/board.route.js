import express from "express"
import { HttpStatusCode } from "../../utilities/constant.js"
import { boardRoutes } from "./index.js"
import { columnRoutes } from "./column.route.js"
import { cardRoutes } from "./card.route.js"
const router = express.Router()


router.get('/status', (req, res)=> res.status(HttpStatusCode.OK).json({status:'OK' }))
/**Board Api */
router.use('/boards', boardRoutes)
/**Column Api */

router.use('/columns', columnRoutes)
/**Card Api */
router.use('/cards', cardRoutes)



export const apiV1 = router

