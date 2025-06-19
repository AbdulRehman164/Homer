import { useState } from 'react';
import Body from './Body';
import Sidebar from './Sidebar';

function App() {
    const [files, setFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState();

    function getFileById(id) {
        return files.find((file) => file.id === id);
    }

    function updateTitle(id, newTitle) {
        setFiles(
            files.map((file) => {
                if (file.id == id) {
                    return { ...file, title: newTitle };
                }
                return file;
            }),
        );
    }
    return (
        <>
            <div className="flex">
                <Sidebar
                    files={files}
                    setFiles={setFiles}
                    setSelectedFile={setSelectedFile}
                />
                <Body
                    fileId={selectedFile}
                    updateTitle={updateTitle}
                    getFileById={getFileById}
                />
            </div>
        </>
    );
}

export default App;
