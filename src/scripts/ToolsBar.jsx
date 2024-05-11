import React from 'react';
import '../styles/ToolsBar.css'; // Assuming you have a separate CSS file for styling
import createfile_icon from '../assets/createfile_icon.svg'; // Assuming you have an image for the create file tool
import search_icon from '../assets/search_icon.png'; // Assuming you have an image for the create file tool
import folder_icon from '../assets/folder_icon.svg'; // Assuming you have an image for the create file tool
import '@fortawesome/fontawesome-free/css/all.css';
import a from '../assets/a.svg';

const handleToolClick = (toolName) => {
    // Implement the functionality for each tool click here
    console.log(`Clicked on ${toolName}`);
    // You can add specific actions for each tool click, like navigating to a different page, showing a modal, etc.
};

function Toolbar() {
    const handleSearchIconClick = () => {
        const dialog = document.getElementById("search-dialog");
        dialog.showModal();
    };

    return (
        <div className="tools-bar">
            <div title='Create new file'>
                <img src={createfile_icon} alt="Create File" onClick={() => handleToolClick('Create File')} />
            </div>
            <div className='searchicon' title='Search' onClick={handleSearchIconClick}>
                <img src={search_icon} width="64" height="64" alt="Search" />
            </div>
            <div title='Open Folder'>
                <label htmlFor="folder-input">
                    <img src={folder_icon} alt="Select Folder" />
                </label>
                <input id="folder-input" type="file" style={{ display: 'none' }} webkitdirectory="" directory="" />
            </div>
            <dialog id="search-dialog">
                <div className='maindialog' style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"flex-start",gap:"10px"}}>
                    <input className='searchinput' type="text" title='Enter the file to be searched' />
                    <button title='Close search' onClick={() => {
                        document.getElementById("search-dialog").close()
                        console.log('Search dialog closed')
                    }}>Close
                    </button>
                </div>
            </dialog>
        </div>
    );
}

export { Toolbar };

