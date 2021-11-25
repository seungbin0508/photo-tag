import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'

dotenv.config()

const app = express()

// Logger

const logPath = path.join(path.resolve(), 'access.log')
const accessLogStream = fs.createWriteStream(logPath, { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream}))

// Router

app.get('/', (req, res, next) => {
	res.send('Hello')
})

app.use((err, req, res, next) => {
	console.log('Error!')
	res.status(500).send('Error!')
})

app.listen(process.env.PORT, () => {
	console.log(`Server listening at PORT ${process.env.PORT}`)
})