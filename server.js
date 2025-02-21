const port =5646
const express = require("express")
const app = express()

app.get("/homepage", (req,res)=>{
    res.send("mr joshua created the homepage")
})
app.listen(port,()=>{
    console.log("we are live on port " +port)
})

