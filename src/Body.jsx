import { useEffect, useState } from 'react';

const Body = ({ files, fileId }) => {
    const [title, setTitle] = useState('');

    function updateTitle(id, newTitle) {
        const file = files[id];
        setFiles({ ...files, id: { ...file, title: newTitle } });
    }

    function isTitleAvailable(title) {
        return !files.some((file) => file.title === title);
    }

    useEffect(() => {
        const file = files[fileId];
        setTitle(file?.title || '');
    }, [fileId]);

    return fileId ? (
        <div className="border border-red-500 w-[85vw] min-h-[100vh] pl-5">
            <input
                placeholder="Untitled"
                type="text"
                className="w-full font-bold resize-none focus:outline-none px-4 text-3xl"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key !== 'Enter') return;
                    e.preventDefault();
                    isTitleAvailable(title) ? updateTitle(fileId, title) : null;
                }}
            />
            <main>
                <div
                    contentEditable={true}
                    placeholder="Write your notes..."
                    className="w-full h-[calc(100vh-3.4rem)] resize-none focus:outline-none px-4 text-[1.2rem]"
                ></div>
            </main>
        </div>
    ) : (
        <div className="border border-red-500 w-[85vw] min-h-[100vh] pl-5"></div>
    );
};
export default Body;
