/* child_process is an inbuilt in nodejs to access it you have to use the keyword       "require" and intialize it to a varialbe if you want to use it using a variable if 
wanna do it directly yo can.
 */


let cp= require("child_process");
const { log } = require("console");
console.log("We are opening");
//cp.execSync("calc");
// start a web page.
cp.execSync("start chrome https://www.youtube.com");
// running other file and getting output via a diff. file
console.log("output of other file "+ cp.execSync("node test1.js"))