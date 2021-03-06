const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

var day = require(__dirname+'/date.js');
const app = express();

var items=[];
let workList=[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.listen(3000,function(){
    console.log("Server running on port 3000");
})

app.get("/",function(req,res){
    res.render("list", {listTitle: day.getDate(), newListItems:items});
});

app.post("/",function(req,res){
    let item = req.body.newItem;

    if(req.body.list=="Work"){
        workList.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
})

app.post("/reset",function(req,res){
    items.length=0;
    res.redirect("/");
})

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work list",newListItems:workList});
})

app.post("/work",function(req,res){
    let item = req.body.newItem;
    workList.push(item);
    res.redirect("/work");
})

app.get("/about",function(req,res){
    res.render("about");
})