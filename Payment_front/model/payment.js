const express= require("express");
const app=express();
const mongoose= require("mongoose");
const bodyParser= require("body-parse")

app.use(bodyParser.urlencoded({extended:true}));

mongoose.coonect()

app.get("/", function(req, res)
{
    res.send("express is online")
}
)

app.listen(3000,function(){
    console.log("server is running on 3000")

} )


