import { useEffect, useRef, useState } from 'react';

const Sidebar = ({ files, setFiles, setSelectedFile }) => {
    const [counter, setCounter] = useState(1);
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

    useEffect(() => {
        if (prevLengthRef.current < files.length) {
            setSelectedFile(files[files.length - 1]?.id);
        }
        prevLengthRef.current = files.length;
    }, [files]);

    return (
        <div className="border border-black w-[15vw] h-[100vh]">
            <button
                onClick={() => {
                    const id = crypto.randomUUID();
                    setFiles([
                        ...files,
                        {
                            id,
                            title: getNextUntitled(files),
                            content: '',
                        },
                    ]);
                    setCounter(counter + 1);
                }}
            >
                File
            </button>
            {files?.map((file) => (
                <div key={file?.id} onClick={() => setSelectedFile(file.id)}>
                    {file.title || 'untitled'}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
