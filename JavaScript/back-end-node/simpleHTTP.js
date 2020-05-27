let http = require("http")

http.createServer((req,res)=>{
    res.end("My first website!!")
}).listen(8081)

//http.createServer(*req,res*).listen(*port*)