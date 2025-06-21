const Sidebar = ({
    files,
    setFiles,
    setSelectedTab,
    selectedTab,
    setTabs,
    tabs,
}) => {
    function getNextUntitled(files) {
        const base = 'Untitled';
        const isBaseNameUsed = Object.keys(files).some(
            (key) => files[key]?.title === base,
        );
        if (!isBaseNameUsed) {
            return base;
        }

        const pattern = /^untitled ([1-9]\d*)$/i;
        const numbers = Object.keys(files)
            .filter((key) => pattern.test(files[key]?.title))
            .map((key) => Number(files[key]?.title.split(' ')[1]));

        const max = numbers.length ? Math.max(...numbers) : 1;

        for (let i = 1; i <= max; i++) {
            if (!numbers.includes(i)) {
                return `${base} ${i}`;
            }
        }

        return `${base} ${max + 1}`;
    }

    function createFile() {
        const fileId = crypto.randomUUID();
        const fileTitle = getNextUntitled(files);
        const tabId = crypto.randomUUID();
        setFiles({
            ...files,
            [fileId]: {
                title: fileTitle,
                content: '',
            },
        });
        setTabs({ ...tabs, [tabId]: { openedFile: fileId } });
        setSelectedTab(tabId);
    }

    function openFileInSelectedTab(key) {
        setTabs({
            ...tabs,
            [selectedTab]: { openedFile: key },
        });
    }

    return (
        <div className="border border-black w-[15vw] h-[100vh]">
            <button onClick={createFile}>File</button>

            {Object.keys(files).map((key) => {
                return (
                    <div key={key} onClick={() => openFileInSelectedTab(key)}>
                        {files[key]?.title}
                    </div>
                );
            })}
        </div>
    );
};

export default Sidebar;
