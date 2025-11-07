import express from 'express'
import path from 'path'
import {ENV} from './lib/env.js' 
import { connectDB } from './lib/db.js'
import cors from 'cors'
import {serve} from 'inngest/express'
import {inngest, functions} from './lib/inngest.js'
const app = express()
 
const __dirname = path.resolve()

// middleware
app.use(express.json())
// credentials: true -> server allows a browser toinclude cookies on a request
app.use(cors({origin: ENV.CLIENT_URL, credentials: true}))

app.use('/api/inngest', serve({client: inngest, functions}))

app.get('/health', (req, res) =>{
    res.status(200).json({
        message: "api is up and running"
    })
})

app.get('/books', (req, res) =>{
    res.status(200).json({
        message: "this is the books endpoint"
    })
})

if(ENV.NODE_ENV ===  'production'){
    app.use(express.static(path.join(__dirname, "../frontend/dist"))) //serve frontend
    app.get('/{*any}', (req, res) =>{
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

const PORT = ENV.PORT

const startServer = async () =>{
    try{
        await connectDB()
        app.listen(PORT, () =>{
  
            console.log(`server is running on port ${PORT}`)
        })
    }catch(error){
        console.log('Error connecting to the server', error)
    }
}

startServer()

