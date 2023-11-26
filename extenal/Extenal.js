console.log("working")
const fs=require("fs");
const os=require("os")
const { writeFile } = require("fs/promises");
const[ , ,n1,n2,op]=process.argv;
function calculate(num1,num2,operation) {
    if(operation=="add"){
       console.log( num1+num2);
    }
    else if(operation=="sub"){
        console.log( num1-num2);
    }
    else if(operation=="mul"){
        console.log( num1*num2);
    }
    else if(operation=="div"){
        console.log( num1/num2);
    }
    else if(operation=="modulo"){
        console.log( num1%num2);
    }
    else {
        console.log("enter operation value");
    }   
}
 //calculate(parseInt(n1),parseInt(n2),op);

 fs.readFile("simple.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error occured",err)
    }
    else{
        console.log(data)
    }
 });
 const content="This text file is written in node.js"
 fs.writeFile("./node.txt",content,(err)=>{
    if(err){
        console.log("Error occured",err)
    }
    else{
        console.log("Written success")
    }
 });

 //update
 const appendContent="/n New line added in a file";
 fs.appendFile("./node.txt",appendContent,(err)=>{
    if(err){
        console.log("error",err)
    }else{
        console.log("file update successfully");
    }
 })

 //delete
 fs.unlink("./simple.txt",(err)=>{
    if(err){
        console.log("error",err);
    }
    else{
        console.log("file deleted successfully");
    }
 })
 //os info
 console.log("Total memory",os.totalmem());
 console.log("free memory",os.freemem());
 console.log("version",os.version());
 console.log("cpu",os.cpus());

 //date
 let time =Date.now();
 console.log("Time",time);
 let date=new Date();
 console.log("Date..........",date.getDate())
 console.log("Month..........",date.getMonth())
 console.log("year..........",date.getFullYear())
 console.log("Today..........",date.toUTCString().slice(0,17));
