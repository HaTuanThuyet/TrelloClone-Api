import express from "express"
const app = express()
const hostname = 'localhost'
const port = 8020
app.get('/', (req, res) => {
    res.end('<h1>Hello Word! Thuyeets dai ca nef</h1><hr/>')
})
app.listen(port, hostname, () => {
    console.log(`hello mọi người, i'm running at ${hostname}:${port}/`)
})