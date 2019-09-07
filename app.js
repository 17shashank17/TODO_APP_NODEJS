var express=require('express');


var todoController=require(__dirname+'/controllers/todo');
var app=express();



app.set('view engine','ejs');


app.use('/assets',express.static('assets'));




todoController(app);



app.listen(8000);