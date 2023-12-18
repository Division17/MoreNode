// to provide user with the help commands

function helpfn(){
    console.log(`
    List of all commans:
        node main.js tree "directoryPath"
        node main.js organise "directoryPath"  
        node main.js help ` 
        
        )
 }
 module.exports={
    helpKey:helpfn
 }