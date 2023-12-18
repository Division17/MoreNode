#!/usr/bin/env node

// to make the code global ^

//  to take input via a user slice 2 because the 0th gonna be node and 1st gonna be the name of the file that is why 2.
let inputArr= process.arsgv.slice(2)
let fs=require("fs")
let path=require("path")
let helpObj=require("./commands/help.js")
let treeObj=require("./commands/tree.js")
let organiseObj=require("./commands/organise.js")
//console.log(inputArr)

// node main.js tree "directoryPath" gives the path of the tree or we can say gives path of the path we are working on.
// node main.js organise "directoryPath" will give the path of the folder to which you are organizing to 

// how will they work well they will pass a string to the node and will make it to do if programmed to . 

let types={
    media:['mp4','mkv','mp3'],
    archives:['zip','7z','rar','tar','gz','iso'],
    document:['pdf','docx','doc','xlsx','xls','odt','ods','txt',],
    app:['exe','dmg','pkg','deb'],
    images:['png','jpeg']
}

let input= inputArr[0]
switch(input){
    case 'tree':treeObj.treeKey(inputArr[1])
        break
    case 'organise':organiseObj.organiseKkey(inputArr[1])
        break
    case 'help':
        helpObj.helpKey()
        break

    default:
    console.log("Please Enter the right Command:-")    
}




 