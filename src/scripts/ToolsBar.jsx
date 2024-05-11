import React, { useState } from 'react';
import '../styles/ToolsBar.css'; // Assuming you have a separate CSS file for styling
import createfile_icon from '../assets/createfile_icon.svg'; // Assuming you have an image for the create file tool
import search_icon from '../assets/search_icon.png'; // Assuming you have an image for the create file tool
import folder_icon from '../assets/folder_icon.svg'; // Assuming you have an image for the create file tool
import '@fortawesome/fontawesome-free/css/all.css';
import { OpenFiles } from '../javascripts/fileconfig/openFolder.file.js'; // Import the OpenFiles function

function Toolbar() {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelect = (event) => {
        const files = event.target.files;
        let fileArray = [];
        for (let i = 0; i < files.length; i++) {
            if (files[i].webkitRelativePath) {
                // If it's a file inside a directory
                fileArray.push(files[i].webkitRelativePath);
            } else {
                // If it's just a file
                fileArray.push(files[i].name);
            }
        }
        setSelectedFiles(fileArray);
        console.log('Selected files:', fileArray);
        OpenFiles(fileArray); // Pass the array of file paths to OpenFiles
    };

    return (
        <div className="tools-bar">
            <div>
                <img src={createfile_icon} alt="Create File" onClick={() => handleToolClick('Create File')} />
            </div>
            <div className='searchicon'>
                <img src={search_icon} width="64" height="64" alt="Search" onClick={() => handleToolClick('Search')} />
            </div>
            <div>
                <label htmlFor="file-input">
                    <img src={folder_icon} alt="Upload File" />
                </label>
                <input id="file-input" type="file" style={{ display: 'none' }} webkitdirectory="" directory="" multiple onChange={handleFileSelect} />
            </div>
        </div>
    );
}

export { Toolbar };
