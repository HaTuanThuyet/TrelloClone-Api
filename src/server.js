import express from "express"
import { connectDB, getDb } from './config/mongodb.js'
import { env } from './config/environtment.js'
import { BoardModel } from './models/board.model.js'

connectDB()
    .then(() => console.log('Conect sucessfuly to database server'))
    .then(() => bootServer())
    .catch(error => {
        console.error(error)
        process.exit(1)
    })

const bootServer = () => {
    const app = express()

    app.get('/test', async (req, res) => {
        let fakedata = {
            title: "thuyetdaicanee",
            columnOrder:['1','2']
        }
        const newBoard = await BoardModel.createNew(fakedata)
        console.log(newBoard)
        res.end(`<h1>Hello Word! Thuyeets dai ca nef </h1><hr/>`)
    })
    app.listen(env.POST, env.HOST, () => {
        console.log(`hello mọi người i love you, i'm running at ${env.HOST}: ${env.POST}/`)
    })
}

