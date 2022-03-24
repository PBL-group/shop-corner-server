const express = require('express')
const mongoose = require('mongoose')
const { readdirSync } = require("fs")
const cors = require('cors')
require('dotenv').config()

//App

const app = express()

//Database

try {
	// Connect to the MongoDB cluster
	
	mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: true
	}, () => console.log(" mongodb is connected through mongoose"))
} catch (error) {
	console.error(`could not connect b/c of ${error}`);
}
// Middlewares

app.use(express.json())
app.use(cors())

// endpoints

// / --> res = working status and fetch data from 'collections'
// /signin --> post = success/fail
// /signup --> post = user
// /profile/:userid --> get = user
// /profile/:userid/saved --> get = user.saved
// /products/:productid --> get = product
// /products --> get = products
// /collections --> get = collections

readdirSync("./routes").map(r => 
	app.use("/", require("./routes/" + r))	
)

const port = process.env.PORT || 8000
app.listen(port, ()=> console.log(`server is running on port ${port}`))
