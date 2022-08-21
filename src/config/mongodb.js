import { MongoClient } from 'mongodb'
import { env } from './environtment.js'
const uri = env.MONGODB_URI
let dbInstance = null

export const connectDB = async () => {
    const client = new MongoClient(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    await client.connect()
    dbInstance = client.db(env.DATABASE_NAME)
   
}
export const getDb = ()=>{
    if(!dbInstance) throw new Error('Must conect to Database first!')
    return dbInstance
}
