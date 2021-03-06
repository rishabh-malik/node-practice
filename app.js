//module made by us
//var stuff=require('./stuff');              // used to import the module and save it in a variable

//console.log(stuff.counter(['rishabh','hi']));      //stuff.counter used to use the counter func of stuff module
//---------------------------------------------------------------------------------------------------------
//events module
// var events=require('events');                       //its a call module built in , in order to use it we have to import it 

// var myEmitter= new events.EventEmitter();   //creating a event emitter object

// myEmitter.on('someEvent',function(msg){            //creating the event listener
//     console.log(msg);
// });

// myEmitter.emit('someEvent','the event was emitted')

//---------------------------------------------------------------------------------------------------------

//util module
// var util=require('util'); 
// var Person=function(name){
//     this.name=name;
// };

// util.inherits(Person, events.EventEmitter);             //the person variable will be able to inherit the events using util

// var james=new Person('james');
// var rishu=new Person('rishu');
// var hrithik=new Person('hrithik');
// var people=[james,rishu,hrithik];

// people.forEach(function(person){
//     person.on('speak',function(msg){
//         console.log(person.name + "said: " + msg);
//     });
// });

// james.emit('speak','hey hrithik');

//---------------------------------------------------------------------------------------------------------
//reading and writing files
//var fs=require('fs');
// var read=fs.readFileSync('read.txt','utf8');               // to read the file
// console.log(read);
// fs.writeFileSync('write.txt',read);                       //to write in a file

//another way by async it is better
// fs.readFile('read.txt','utf8',function(err,data){          //async version-the code keeps on running while it is reading the file
//     fs.writeFile('write1.txt',data)
//     console.log(data);
// });
// console.log('hey');

//---------------------------------------------------------------------------------------------------------
//creating and removing directories
//fs.unlink('write.txt');                                    //to delete the file
//fs.mkdirSync('app1');                                        //to create a directory synchonously
//fs.rmdirSync('app1');                                        //to remove a directory synchonously
// fs.mkdir('app1',function(){
//     console.log('created directory');
// });                                        //to create a directory synchonously
//fs.rmdir('app1',function(){
//    console.log('removed directory');
//});   

//---------------------------------------------------------------------------------------------------------
//creating server and dealing with request and responses
// var http=require('http');
// var server=http.createServer(function(req,res){            //creating a server using http module then the func gets trigger which takes 2 arguments the request and the response
//      console.log('request was made '+ req.url);
//       res.writeHead(200,{'Content-Type':'text/plain'});    //sending the response contains 2 things- status and Content
//       res.end('hey');                                      //to send it     
// });

// server.listen(3000,'127.0.0.1');
// console.log('listening to port 3000');

//---------------------------------------------------------------------------------------------------------
//writable,readable streams and duplex-both
// var http=require('http');
// var fs=require('fs');

// var myReadStream=fs.createReadStream(__dirname+'/read.txt','utf8');
// var myWriteStream=fs.createWriteStream(__dirname+'/write.txt');


// // myReadStream.on('data',function(chunk){               //addind listener to it whenever a new buffer stream is received
// //           console.log('new chunk received: ');
// //             myWriteStream.write(chunk);
// //           console.log(chunk);
// // });

// myReadStream.pipe(myWriteStream);                       //piping a read stream into write stream

//---------------------------------------------------------------------------------------------------------
//giving output in streams
// var http=require('http');
// var fs=require('fs');
// var server=http.createServer(function(req,res){            //creating a server using http module then the func gets trigger which takes 2 arguments the request and the response
//      console.log('request was made '+ req.url);
//       res.writeHead(200,{'Content-Type':'text/plain'});    //sending the response contains 2 things- status and Content
//       var myReadStream=fs.createReadStream(__dirname+'/read.txt','utf8');
//       myReadStream.pipe(res);
// });

// server.listen(3000,'127.0.0.1');
// console.log('listening to port 3000');

//--------------------------------------------------------------------------------------------------------
//serving html pages to the user
// var http=require('http');
// var fs=require('fs');
// var server=http.createServer(function(req,res){            //creating a server using http module then the func gets trigger which takes 2 arguments the request and the response
//      console.log('request was made '+ req.url);
//       res.writeHead(200,{'Content-Type':'text/html'});    //sending the response contains 2 things- status and Content
//       var myReadStream=fs.createReadStream(__dirname+'/index.html','utf8');
//       myReadStream.pipe(res);
// });

// server.listen(3000,'127.0.0.1');
// console.log('listening to port 3000');

//--------------------------------------------------------------------------------------------------------
//serving JSON data
// var http=require('http');
// var fs=require('fs');
// var server=http.createServer(function(req,res){            //creating a server using http module then the func gets trigger which takes 2 arguments the request and the response
//      console.log('request was made '+ req.url);
//       res.writeHead(200,{'Content-Type':'application/json'});    //sending the response contains 2 things- status and Content
//       var myObj={
//           name:'rishabh',
//           age:18
//         }
//         res.end(JSON.stringify(myObj));
// });

// server.listen(3000,'127.0.0.1');
// console.log('listening to port 3000');

//--------------------------------------------------------------------------------------------------------
//basic routing - serving various html pages

// var http=require('http');
// var fs=require('fs');
// var server=http.createServer(function(req,res){            //creating a server using http module then the func gets trigger which takes 2 arguments the request and the response
//      console.log('request was made '+ req.url);
//      if(req.url==='/home'||req.url==='/')
//       res.writeHead(200,{'Content-Type':'text/html'});    //sending the response contains 2 things- status and Content
//       var myReadStream=fs.createReadStream(__dirname+'/index.html','utf8');     
//          myReadStream.pipe(res);
// });
// server.listen(3000,'127.0.0.1');
// console.log('listening to port 3000')

//--------------------------------------------------------------------------------------------------------
//express-package
// var express=require('express');

// var app=express();                //to access the express functionality
// app.get('/',function(req,res){      //get is a express method to get the response
//   res.send('this is the home page')
// });
// app.get('/contact',function(req,res){      //get is a express method to get the response
//   res.send('this is the contact page')
// });
// app.listen(3000);

//route parameters in express
// var express=require('express');

// var app=express();                //to access the express functionality
// app.get('/',function(req,res){      //get is a express method to get the response
//   res.send('this is the home page')
// });
// app.get('/contact',function(req,res){      //get is a express method to get the response
//   res.send('this is the contact page')
// });
// app.get('/profile/:id',function(req,res){
//   res.send('you requested to see the id of '+req.params.id);    //to get the parameters
// });
// app.listen(3000);
//--------------------------------------------------------------------------------------------------------

//sending html files using express package
// var express=require('express');
// var app=express();                //to access the express functionality
// app.use('/assets',express.static('assets'));        //using expressto use assets
// app.set('view engine','ejs');     //to tell express that we are using the ejs template engine
// app.get('/',function(req,res){      //get is a express method to get the response
//   res.sendFile(__dirname+'/index.html');
// });
// app.get('/contact',function(req,res){      //get is a express method to get the response
//   res.send('this is the contact page')
// });
// app.get('/profile/:id',function(req,res){
//   res.render('profile',{person:req.params.id});                               //to render a view
// });
// app.listen(3000);

//--------------------------------------------------------------------------------------------------------
//query strings
// var express=require('express');
// var app=express();                //to access the express functionality
// app.use('/assets',express.static('assets'));        //using expressto use assets
// app.set('view engine','ejs');     //to tell express that we are using the ejs template engine
// app.get('/',function(req,res){      //get is a express method to get the response
//   res.sendFile(__dirname+'/index.html');
// });
// app.get('/contact',function(req,res){      //get is a express method to get the response
//   res.render('contact',{qs:req.query});
// });
// app.get('/profile/:id',function(req,res){
//   res.render('profile',{person:req.params.id});                               //to render a view
// });
// app.listen(3000);

//--------------------------------------------------------------------------------------------------------
//post to submit forms or info to the server
var express=require('express');
var app=express();                //to access the express functionality
var bodyParser=require('body-parser');
app.use('/assets',express.static('assets'));        //using expressto use assets
app.set('view engine','ejs');     //to tell express that we are using the ejs template engine
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/contact-form', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.send('contact-form')
});

app.listen(3000);



































