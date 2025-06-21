const Header = ({ tabs, selectedTab, files }) => {
    return (
        <header className="h-[5vh] w-[full] flex">
            {Object.keys(tabs).map((key) => (
                <div
                    key={key}
                    className={`${key === selectedTab ? 'border' : ''}`}
                >
                    {files[tabs[key]?.openedFile]?.title}
                </div>
            ))}
        </header>
    );
};

export default Header;
