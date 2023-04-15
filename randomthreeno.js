let a = 1;
let b = 2;
let c = 3;
let generate = Math.floor(Math.random() * 10) % 3+1;
//console.log(generate);
if (generate > b) {
    console.log("max number is :" + generate)
}
else{
    console.log("min number is " + generate)
}

//Write a program that takes day and month from the command line and prints true if
//day of month is between March 20 and June 20, false otherwise.
const prompt=require("prompt-sync")({sigint:true});
var date = prompt("enter date");
var month = prompt("enter month");
if (month < 6 & date <= 20 && month >= 3 && date <= 20) {
    console.log("true" + date +" " + month);
}else{
    console.log("false" + date+" " + month);
}