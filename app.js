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








