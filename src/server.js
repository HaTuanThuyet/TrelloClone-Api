import express from "express"
import { connectDB, getDb } from './config/mongodb.js'
import { env } from './config/environtment.js'
import { BoardModel } from './models/board.model.js'
import { apiV1 } from './routers/v1/board.route.js'

connectDB()
    .then(() => console.log('Conect sucessfuly to database server'))
    .then(() => bootServer())
    .catch(error => {
        console.error(error)
        process.exit(1)
    })

const bootServer = () => {
    const app = express()
    app.use(express.json())
    app.use('/v1', apiV1)

    app.listen(env.POST, env.HOST, () => {
        console.log(`hello mọi người i love you, i'm running at ${env.HOST}: ${env.POST}/`)
    })
}

