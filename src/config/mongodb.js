import { MongoClient } from 'mongodb'
import {env} from './environtment.js'
const uri = env.MONGODB_URI

export const connectDB = async () => {
    const client = new MongoClient(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    try {
        // Conect the client to the server
        await client.connect()
        console.log('conect successfuly to server')
        await listDatabase(client)
    } finally {
        // close
        await client.close()
    }
}
const listDatabase = async (client)=>{
    const databaseList = await client.db().admin().listDatabases()
    console.log(databaseList)
    console.log('Your databases')
    databaseList.databases.forEach(db => {
        console.log(` -${db.name}`)
    });
}