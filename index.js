var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var router = require('./routes');
var mongoose = require('mongoose');

var app = express();

mongoose.connect(process.env.MONGODB_URI ||"mongodb://node:node@ds161304.mlab.com:61304/nodechatapp",function(error){
    if(error){console.log("error information :",error)}
    else
    console.log("connected succesfully");
    
});

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'js')));
app.use(router);

app.listen( process.env.PORT || 3000,function(){
    console.log("Running in the browser")
})