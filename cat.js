const fs = require('fs');

let fileName = require('./bash.js')

module.exports = function(){
    console.log(fileName)
    fs.readFile(fileName.kitty,(err,data)=>{
    if(err)throw err
        process.stdout.write(data.toString())
        process.stdout.write('\nprompt > ')
    }) 
    
}


 