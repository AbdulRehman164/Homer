import { useState } from 'react';
import Body from './Body';
import Sidebar from './Sidebar';
import Header from './Header';

function App() {
    const [files, setFiles] = useState({});
    const [tabs, setTabs] = useState({});
    const [selectedTab, setSelectedTab] = useState('');
    const openedTab = tabs[selectedTab];

    return (
        <>
            <Header tabs={tabs} selectedTab={selectedTab} files={files} />
            <div className="flex">
                <Sidebar
                    files={files}
                    setFiles={setFiles}
                    setSelectedTab={setSelectedTab}
                    selectedTab={selectedTab}
                    setTabs={setTabs}
                    tabs={tabs}
                />
                <Body files={files} fileId={openedTab?.openedFile} />
            </div>
        </>
    );
}

export default App;
