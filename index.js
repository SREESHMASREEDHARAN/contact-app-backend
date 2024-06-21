require('dotenv').config()
const express=require('express');
const cors=require('cors')
const db=require('./DB/connection')
const router =require('./Router/route')
const appMiddleware=require('./Middlewares/appMiddleware')
const contactServer=express()
contactServer.use(cors())
contactServer.use(express.json())
contactServer.use(router)
contactServer.use('/uploads',express.static('./uploads'))
contactServer.use(appMiddleware)

const PORT=4000 || process.env.PORT
contactServer.listen(PORT,()=>{
    console.log('Listening on the port' + PORT);
})
contactServer.get("/",(req,res)=>{
    res.send(`<h1>Contact App is Started...</h1>`)
})