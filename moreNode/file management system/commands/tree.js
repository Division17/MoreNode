function treefn(dirPath){
    /// let pathExists
   // mini task 1:- to check if dirPath is given or not 
   if(dirPath==undefined){
    treeHelper(process.cwd()," ")
    return 
    
   } 
   else{
     doesExits=fs.existsSync(dirPath)
    
    //if path exists then create a folder after checking whether a folder is already present or not

    if(doesExits){
         treeHelper(dirPath,"")
       
    }
    else{
        console.log("Kindly enter the path of the desired location")
    return 
    }
 console.log("The tree command is executed")
}
}

function treeHelper(dirPath,indend){
       let isFile=fs.lstatSync(dirPath).isFile()
       if(isFile){
               let fileName=path.basename(dirPath)
            console.log(indend+"|---------"+fileName)
                }
       else{
              let isdirName=path.basename(dirPath)
              console.log(indend+"|___________"+isdirName)

              let childNames=fs.readdirSync(dirPath)
              for(let i=0;i<childNames.length;i++){
                 let childPath=path.join(dirPath,childNames[i])
                 treeHelper(childPath,indend+"\t")
              }

            }
}



module.exports={
    treeKey:treefn
}