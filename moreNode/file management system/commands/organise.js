
// to create an organise folder containing files on the basis of the category.
function organisefn(dirPath){
    let pathExists
   // mini task 1:- to check if dirPath is given or not 
   if(dirPath==undefined){
        pathExists=process.cwd()
    return 
   } 
   else{
     doesExits=fs.existsSync(dirPath)
    
    //if path exists then create a folder after checking whether a folder is already present or not

    if(dirPath){
         // create an organised_files directory
          pathExists = path.join(dirPath,"organised_Files")
         if(fs.existsSync(pathExists)==false){
            fs.mkdirSync(pathExists)
         }
    }
    else{
        console.log("Kindly enter the path of the desired location")
    return 
    }

    organiseHelper(dirPath,pathExists)
   }
}

   function organiseHelper(src,dest){
     // 3. identify categories of all the files present in that input directory
     let childNames=fs.readdirSync(src)
        for(let i =0; i<childNames.length;i++){
            let childAddress=path.join(src,childNames[i])
             let isFile=fs.lstatSync(childAddress).isFile()
             if(isFile){
                //console.log(childNames[i])
            let category= getCategory(childNames[i]) 
            console.log(childNames[i]," belongs to this Category", category)
             
            sendFiles(childAddress,dest,category)
            }
        }
 }

function sendFiles(childAddress,dest,category){
  let categoryPath=path.join(dest,category)
  if(fs.existsSync(categoryPath)==false){
    fs.mkdirSync(categoryPath)
  }
  let fileName=path.basename(childAddress)
  let destFilePath=path.join(categoryPath,fileName)
  fs.copyFileSync(childAddress,destFilePath)
  fs.unlinkSync(childAddress)
  console.log(" File", fileName, "copied to category", category)
}

   function getCategory(name){
    let ext=path.extname(name)
      ext=ext.slice(1)
          
           for(let type in types){
            let cType=types[type]
            for(let i =0;i<cType.length;i++){
              if(ext==cType[i]){
                  return type
              }  

            }
           
           }
    
           return "Other"
   }
