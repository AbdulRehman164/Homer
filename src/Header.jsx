const Header = ({ tabs, selectedTab, getFileById }) => {
    return (
        <header className="h-[5vh] w-[full] flex">
            {tabs.map((tab) => (
                <div
                    key={tab?.id}
                    className={`${tab?.id === selectedTab ? 'border' : ''}`}
                >
                    {getFileById(tab?.openedFile)?.title}
                </div>
            ))}
        </header>
    );
};

export default Header;
