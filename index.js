const express = require("express")
const dotenv = require("dotenv")
let app = express()
dotenv.config()
app.use(express.json())
console.log("testting test")
app.post("/getSampleData", (req, res) => {
    console.log("getSampleData", req.body)
    res.send([
        {
            name: "ravikant",
            address: "1st floor faridabad"
        },
        {
            name: "shashikant",
            address: "2nd floor faridabad"
        }
    ])
})

let PORT=process.env.PORT
app.get("/healthChek",(req,res)=>{
    res.send({message:"success"})
})
app.listen(PORT, () => {
    console.log("Server is runing at 3001")
})