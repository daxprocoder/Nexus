import React, { useState } from 'react';
import { open } from '@tauri-apps/api/dialog';
import { readTextFile } from '@tauri-apps/api/fs';

function FileExplorer() {
    const [contents, setContents] = useState("");

    const readFileContents = async () => {
        try {
            const selectedPath = await open({ multiple: false });
            if (!selectedPath) return;
            const fileContents = await readTextFile(selectedPath);
            setContents(fileContents);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            {contents && <p>{contents}</p>}
            <button onClick={readFileContents}>Open File Explorer</button>
        </div>
    );
}

export default FileExplorer;
