import fs from 'fs';
import { OpenFodler } from './openFolder.file.js';

function createFile() {


    fs.writeFile('hello ji how are u ', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

}

createFile()

