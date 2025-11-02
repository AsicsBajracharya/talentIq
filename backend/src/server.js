import express from 'express'
import {ENV} from './lib/env.js'

const app = express()

app.get('/health', (req, res) =>{
    res.status(200).json({
        message: "api is up and running"
    })
})
const PORT = ENV.PORT
app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`)
})