/* file system is used to do basic functions with the file / folder like creating, udating, writing and deletion of the file/folder. */

let fs=require("fs");
// to read a file using buffer when linked buffer with a diff. formats like words etc. converts the file into that respective format.

let buffer = fs.readFileSync("fstest.js")
//console.log("bin data", buffer)
//console.log("bin data"+ buffer)

// to create file
//fs.openSync('abc.txt','w')

//    fs.writeFileSync('abc.txt','Aaj hum bahut khush hai')

// if no file then it creates one, if file present then it overwrites the file and changes its content

//    fs.writeFileSync('abc.txt','Aaj hum bahut happy hai')

//if no file then it creates one, if file present then it adds the information just in the last

//fs.appendFileSync('abc.txt','  kyu itne happy ho?')


////////////////////////////////////////////////////////////////////////////////////////

//                     ********   for folders **********

// to create a folder
//  fs.mkdirSync('NewFolder')

// to create a file inside a folder
// fs.writeFileSync('NewFolder/TestFile.txt','Test Content')

// to unlink or delte the file in a folder
// let content = fs.readdirSync('NewFolder')
// for(let j of content){
//    fs.unlinkSync('NewFolder/'+j)
// }

// to remove a folder

// fs.rmdirSync('NewFolder')

// fs.existsSync("") -> true if file exists at a path.

let doesPathExist=fs.existsSync("Test1.txt")
console.log(doesPathExist)

// fs.lstatSync-> tells you that the path you have given  is file or directory
let detalObj =fs.lstatSync(__dirname+"\\filesystem.js")
let ans= detalObj.isFile()
console.log(ans)
ans=detalObj.isDirectory()
console.log(ans)

// fs.isFile/fs.isDirectory is a function to know whether a file/ directory rspectively

for(let i=1;i<=10;i++){
    let dirPathToMake = `Lecture-${i}`
    fs.mkdirSync(dirPathToMake)
    fs.writeFileSync(path.join(dirPathToMake,"readme.md"), `# readme for ${dirPathToMake}`)
}