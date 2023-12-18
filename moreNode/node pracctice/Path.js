//  to be handeled by the nodejs to tackle dispute b/w Mac and WINDOWS by adding or joining the paths without using slashes and etc.

let path =require("path")

for(let i=1;i<=10;i++){
    let dirPathToMake = `Lecture-${i}`
    fs.mkdirSync(dirPathToMake)
    fs.writeFileSync(path.join(dirPathToMake,"readme.md"), `# readme for ${dirPathToMake}`)
}
