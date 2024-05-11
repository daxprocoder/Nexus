import fs from 'fs';
import { OpenFodler } from './openFolder.file.js';

function createFile(){


    fs.appendFile(OpenFodler(),'', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

}

createFile()

