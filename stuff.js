var counter=function(arr){
     return 'there are '+ arr.length +' elements';
};

var adder= function(a,b){
         return `the sum of 2 numbers id ${a+b}`           // `` are used for concatenation ie we can concatenate things with the help of ${}
};

module.exports.pi=3.14;

module.exports.counter=counter;                                    // used to export the module
module.exports.adder=adder; 

// module.exports={                                                 //also a way to export
//     counter:counter,
//     adder:adder,
//     pi:pi
// } ;