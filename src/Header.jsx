const Header = ({ tabs, selectedTab, setSelectedTab, files, setTabs }) => {
    return (
        <header className="h-[5vh] w-[full] flex">
            {Object.keys(tabs).map((key, index, arr) => (
                <div
                    key={key}
                    className={`${key === selectedTab ? 'border border-2' : ''} flex gap-2`}
                >
                    <div onClick={() => setSelectedTab(key)}>
                        {files[tabs[key]?.openedFile]?.title}
                    </div>
                    <button
                        className="border border-red"
                        onClick={() => {
                            if (selectedTab === key) {
                                const nextTab =
                                    arr[index + 1] || arr[index - 1] || '';
                                setSelectedTab(nextTab);
                            }
                            const { [key]: value, ...rest } = tabs;
                            setTabs(rest);
                        }}
                    >
                        x
                    </button>
                </div>
            ))}
        </header>
    );
};

export default Header;
