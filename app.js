const os = require('os');
const fs = require('fs');
const http = require('http');
const mod1 = require('./module1');
const express = require('express');
const app = express();
const morgan = require('morgan');
const func = require('./function');
const bodyParser =require('body-parser');
/*modules==============================================================*/




/*setting============================================================= */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
/*====================================================================*/



/*API==================================================================*/
const members = [
    {
        id:1,
        name: 'dylan'
    },
    {
        id:2,
        name: 'gaetan'
    },
    {
        id:3,
        name: 'Ma b***'
    }

];

app.get('/api/v1/members/:id',(req,res) =>{
    res.json(func.sucess(members[(req.params.id)-1].name))
});
app.get('/api/v1/members', (req,res) => {
    if (req.query.max != undefined && req.query.max > 0){
        res.json(func.sucess(members.slice(O, req.query.max)))
    }else if (req.query.max != undefined){
        res.json(func.error(members))
    }else {
        res.json(func.sucess(members))
    }
});
app.post('/api/v1/members', (req,res)=>{
   if(req.body.name){

       let member ={
           id: members.length+1,
           name: req.body.name
       };

       members.push(member)
       res.json(func.sucess(members))
   }else {
       res.json(func.error('invalid'))
   }
});
app.listen(8080,()=>{console.log('start serve')});
/*Test========================================================*/
/*
console.log('achithecture :'+ os.arch());

let InfoCpu = os.cpus();
console.log("model:"+ InfoCpu[1].model);



exports.sayHello = ()=>{
  console.log('hello')
}



(function () {
    console.log('function');
})();

setTimeout(function () {
    console.log('fonction2');
}, 1000);

setTimeout(()=>console.log('J aime node'),1233);
*/
/*
fs.readFile('test.txt','utf-8',(err,data)=> {
    if(err) {
        console.log(err)
    } else {
        console.log(data)
        fs.writeFile('test.txt','comment allez-vous','utf-8', (err) =>{
            console.log(err);

            fs.readFile('test.txt','utf-8', (err, data)=>{
                console.log(data);
            })
        })
    }
} );*/
/*http.createServer((req, res)=>{
    if (req.url == '/') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write("<h1 style='color:gray;font-size: xx-large;'>ACCUEIL</h1>\n")
    }else if(req.url == '/') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write("<h1 style='color:gray;font-size: xx-large;'>ACCUEIL</h1>\n")

        fs.readFile('test.txt','utf-8',(err,data)=>{
            if(err){
                res.writeHead(404,{'content-type':'text/html'})
                res;write("<span style='color:red;font-size: xx-large;'>Erreur 404</span>")
            }else{
                res.writeHead(200,{'content-type':'text/html'})
                res.write(data);
            }
        })

    }else{
        res.writeHead(404, {'content-type':'text/html'})
        res.write("<span style='color:red;font-size: xx-large;'>Erreur 404</span>")
    }
    res.end();
}).listen(8080);*/
/*mod1.sayHello();
console.log(mod1.hello);
*/
/*app.get('/api', (req,res) =>{
    res.send('Root API')
});

app.get('/api/v1',(req,res)=>{
    res.send('API version 1');
});

app.get('/api/v1/book/:id',(req,res)=>{
   res.send(req.params);
});*/