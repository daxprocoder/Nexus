import React, { useState } from 'react';
import '../styles/ToolsBar.css'; // Assuming you have a separate CSS file for styling
import FileHandler from '../scripts/FileHandler'; // Import FileHandler component

function Toolbar() {
    const [showFileHandler, setShowFileHandler] = useState(false);

    const handleToolClick = (toolName) => {
        // Implement specific actions for each tool click
        console.log(`Clicked on ${toolName}`);

        // Open FileHandler when "Files" tool is clicked
        if (toolName === 'Files') {
            setShowFileHandler(true);
        }
    };

    return (
        <div className="tools-bar">
            <button className="tool" onClick={() => handleToolClick('Files')}>
                <i className="fas fa-file"></i>
                <span className="label">Files</span>
            </button>
            {showFileHandler && <FileHandler />}
        </div>
    );
}

export { Toolbar };
