'use strict';

var i = 'Hello ';
function greet(name){
    console.log(i+ name);
}

function* fibs(){
    let a = 0;
    let b = 1;
    while(true){
        yield a;
        [a,b] = [b,a+b];
    }
}
let [first,second,third,fourth,fifth,sixth] = fibs();

fifth;

module.exports = greet;

