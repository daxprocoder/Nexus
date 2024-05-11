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
    return (
        <div className="tools-bar">
            <div>
                <img src={createfile_icon} alt="Create File" onClick={() => handleToolClick('Create File')} />
            </div>
            <div className='searchicon'>
                <img src={search_icon} width="64" height="64" alt="Search" onClick={() => handleToolClick('Search')} />
            </div>
            <div>
                <img src={folder_icon} alt="JavaScript" onClick={() => handleToolClick('JavaScript')} />
            </div>
        </div>
    );
}

export { Toolbar };
