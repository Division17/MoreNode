#!/usr/bin/env node
let fs=require("fs")
let helpObj=require("./commands/help.js")
let userInput= process.argv.slice(2)
let operations=[]
let fileName=[]
 for(let i=0;i<userInput.length;i++){
    if(userInput[i].charAt(0)=="-"){
        operations.push(userInput[i])
    }
    else{
        fileName.push(userInput[i])
    }
 }
   let content =""
for(let i=0;i<fileName.length;i++){
       let bufferContent= fs.readFileSync(fileName[i])
        content+=bufferContent+"\n"
    }
    console.log(content)

