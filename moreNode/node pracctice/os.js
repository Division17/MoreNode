/* this is also an inbuilt feature of the node js
 helps to connect to the operting system and lets the code access the os details and etc..
 */

 let os=require("os")
 // to get info about the arch. of the os
 console.log(os.arch())
 // to get info about the platform
 console.log(os.platform())
 // to get wifi  related details
 console.log(os.networkInterfaces())