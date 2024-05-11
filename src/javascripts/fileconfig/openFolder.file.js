import os from 'os'
import fs from 'fs'

function OpenFodler(){


    const localPath = '../test/' + 'test.txt'
    return localPath


}


function OpenFiles(){
    //user which open only selected files.
    
    const filesNames = ['../test/test.txt','../test/test2.txt']
    
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

// OpenFiles()


export {OpenFiles}
export{OpenFodler}