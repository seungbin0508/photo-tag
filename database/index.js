import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()
const databaseName = process.env.NODE_ENV

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@development.07uac.mongodb.net/Development?retryWrites=true&w=majority`

const connection = await MongoClient.connect(URI)
const db = connection.db(databaseName)

console.log(`Database connected to ${databaseName}`)
export default db
