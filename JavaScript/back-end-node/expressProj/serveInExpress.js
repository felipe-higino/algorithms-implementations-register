/*
    Express is a route-oriented framework
    It helps us to create server routes intuitively
*/

const express = require("express")
const app = express()

//creating routes
//localhost:8081
app.get("/", (req,res)=>{
    res.send("This is the main page")//what to write in page
})

//localhost:8081/otherPg
app.get("/otherPg", (req,res)=>{
    res.send("This is other page")
})

//localhost:8081/pgpar (parameters)
app.get("/pgpar/:param1/:param2", (req,res)=>{
    res.send("ParamsPG")
    console.log(req.params);
    /*
    returns for 8081/pgpar/par1/par2 this JSON:
        {"param1":"par1","param2":"par2"}
    */
})

//localhost:8081/myhtml
app.get("/myhtml",(req,res)=>{
    //sending an HTML FILE to be consumed by front-end
    res.sendFile(__dirname+"/index.html")
})

app.listen(8081)//must be the last line, starting server event