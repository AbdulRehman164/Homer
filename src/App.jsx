import { useState } from 'react';
import Body from './Body';
import Sidebar from './Sidebar';
import Header from './Header';

function App() {
    const [files, setFiles] = useState([]);
    const [tabs, setTabs] = useState([]);
    const [selectedTab, setSelectedTab] = useState('');
    const openedTab = getTabById(selectedTab);

    function getTabById(id) {
        return tabs.find((tab) => tab.id === id);
    }

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

    function isTitleAvailable(title) {
        return !files.some((file) => file.title === title);
    }

    return (
        <>
            <Header
                tabs={tabs}
                selectedTab={selectedTab}
                getFileById={getFileById}
            />
            <div className="flex">
                <Sidebar
                    files={files}
                    setFiles={setFiles}
                    setSelectedTab={setSelectedTab}
                    selectedTab={selectedTab}
                    setTabs={setTabs}
                    tabs={tabs}
                />
                <Body
                    fileId={openedTab?.openedFile}
                    updateTitle={updateTitle}
                    getFileById={getFileById}
                    isTitleAvailable={isTitleAvailable}
                />
            </div>
        </>
    );
}

export default App;
