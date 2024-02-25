import express from 'express' 
import dotenv from 'dotenv'
import morgan from 'morgan'

import noterouter from './routes/noteRouter.js'
import dbConnection from './config/database.js'

// config
dotenv.config({path:'./config.env'})
// database
dbConnection()
const app=express()

//middleware
app.use(express.json())
app.use(morgan('dev'))

// Mount Routes
app.use('/api/v1/notes',noterouter)

app.listen(3000, () => {
    console.log('Server started on port 3000');
})