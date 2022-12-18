const express = require("express")
const dotenv = require("dotenv").config();
const port = process.env.PORT || 1000


const app = express()
//Enable Body Parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/openai",require("./routes/openaiRoutes"))


app.listen(port,()=>{
    console.log(`Server up and Running at ${port}`)
})