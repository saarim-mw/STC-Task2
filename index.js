const express = require("express");
const path = require("path");
const res = require("express/lib/response");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, "/content/index.html"));
});

app.post("/", (req, res)=>{
    var num1=parseInt(req.body.firstNumber);
    var num2=parseInt(req.body.secondNumber);
    var num3=parseInt(req.body.thirdNumber);
    var result=parseInt((num1+num2+num3)/3);
    res.send("Average is " + result);

});    

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
});