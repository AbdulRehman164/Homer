import { useEffect, useRef } from 'react';

const Sidebar = ({
    files,
    setFiles,
    setSelectedTab,
    selectedTab,
    setTabs,
    tabs,
}) => {
    const prevLengthRef = useRef(files.length);

    function getNextUntitled(files) {
        const base = 'Untitled';
        const isBaseNameUsed = files.some((file) => file.title === base);
        if (!isBaseNameUsed) {
            return base;
        }

        const pattern = /^untitled ([1-9]\d*)$/i;
        const numbers = files
            .filter((file) => pattern.test(file.title))
            .map((file) => Number(file.title.split(' ')[1]));

        const max = numbers.length ? Math.max(...numbers) : 1;

        for (let i = 1; i <= max; i++) {
            if (!numbers.includes(i)) {
                return `${base} ${i}`;
            }
        }

        return `${base} ${max + 1}`;
    }

    return (
        <div className="border border-black w-[15vw] h-[100vh]">
            <button
                onClick={() => {
                    const fileId = crypto.randomUUID();
                    const fileTitle = getNextUntitled(files);
                    const tabId = crypto.randomUUID();
                    setFiles([
                        ...files,
                        {
                            id: fileId,
                            title: fileTitle,
                            content: '',
                        },
                    ]);
                    setTabs([...tabs, { id: tabId, openedFile: fileId }]);
                    setSelectedTab(tabId);
                }}
            >
                File
            </button>
            {files?.map((file) => (
                <div
                    key={file?.id}
                    onClick={() => {
                        setTabs(
                            tabs.map((tab) =>
                                tab?.id === selectedTab
                                    ? {
                                          ...tab,
                                          openedFile: file?.id,
                                      }
                                    : tab,
                            ),
                        );
                    }}
                >
                    {file.title || 'untitled'}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
