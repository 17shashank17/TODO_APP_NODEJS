
var data=[{items:'Learn Node Js'},{items:'Learn React Js'},{items:'Learn ML'}];

var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:false});

module.exports=function(app){
    app.get('/',function(req,res){
        console.log(req.url);
        res.render("home",{data:data});
    });

    app.post('/',urlencodedParser,function(req,res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/:item',function(req,res){
        data=data.filter(function(todo){
            return todo.items !== req.params.item;
        });
        res.json(data);
    });
}