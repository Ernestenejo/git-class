const port =5646
const express = require("express")
const app = express()

app.get("/homepage", (req,res)=>{
    res.send("joshua created the homepage")
})
app.get("/contact", (req, res)=>{
    res.send("contact me on larryamadi223@gmail.com")
});
app.get("/About", (req, res)=>{
    res.send("check About me on     h billazeezdinho on all social media")
});
app.listen(port,()=>{
    console.log("we are live on port " +port)
})
