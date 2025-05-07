const express = require("express")
const dotenv = require("dotenv")
const { default: axios } = require("axios")
let app = express()
dotenv.config()
app.use(express.json())
console.log("testting test")
app.post("/getSampleData",async (req, res) => {
    let resultData=await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log("getSampleData resultData",resultData.data)
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