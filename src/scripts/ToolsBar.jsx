import React from 'react';
import '../styles/ToolsBar.css'; // Assuming you have a separate CSS file for styling

import '@fortawesome/fontawesome-free/css/all.css';

const handleToolClick = (toolName) => {
    // Implement the functionality for each tool click here
    console.log(`Clicked on ${toolName}`);
    // You can add specific actions for each tool click, like navigating to a different page, showing a modal, etc.
};

function Toolbar() {
    return (
        <div className="tools-bar">
            <div className="btns">
                <button className='createfile'>
                    <span>&#x2B; </span>
                    Create new file
                    </button>
                <button className='search'>i</button>
            </div>
            <div className="explorer">
                <span>Explorer</span>
                <span>-</span>
            </div>
            <div className="tool" onClick={() => handleToolClick('Files')}>
                <i className="fas fa-file"></i>
                <span className="label">Files</span>
            </div>
            <div className="tool" onClick={() => handleToolClick('Search')}>
                <i className="fas fa-search"></i>
                <span className="label">Search</span>
            </div>
            <div className="tool" onClick={() => handleToolClick('Profile')}>
                <i className="fas fa-user"></i>
                <span className="label">Profile</span>
            </div>
            <div className="tool" onClick={() => handleToolClick('Settings')}>
                <i className="fas fa-cog"></i>
                <span className="label">Settings</span>
            </div>
        </div>
    );
}

export { Toolbar };
