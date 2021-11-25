import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

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