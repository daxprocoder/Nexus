import os from 'os'
import fs from 'fs'


function OpenFiles(){
    //user which open only selected files.
    
    const filesNames = []
    
    filesNames.forEach(fileName =>{
        fs.readFile(fileName,'utf8',(err,data)=>{
            if(err){
                console.log('contents is coming')
                return;
            }
            console.log(data)
        })
    })
}

OpenFiles()


export {OpenFiles}
