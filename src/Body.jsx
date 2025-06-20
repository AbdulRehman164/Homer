import { useEffect, useState } from 'react';

const Body = ({ fileId, updateTitle, getFileById, isTitleAvailable }) => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        const file = getFileById(fileId);
        setTitle(file?.title || '');
    }, [fileId]);
    return (
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
    );
};
export default Body;
