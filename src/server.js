import express from "express"
import { connectDB } from './config/mongodb.js'
import {env} from './config/environtment.js'

const app = express()

// const hostname = 'localhost'
// const port = 8030
connectDB().catch(console.log)
app.get('/', (req, res) => {
    res.end('<h1>Hello Word! Thuyeets dai ca nef</h1><hr/>')
})
app.listen(env.POST, env.HOST, () => {
    console.log(`hello mọi người i love you, i'm running at ${env.HOST}: ${env.POST}/`)
})