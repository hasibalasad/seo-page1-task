/* eslint-disable react/prop-types */

function Modal({ visible, setVisible, selectedFiles, setSelectedFiles }) {

    const handleFileChange = (event) => {
        const files = [...event.target.files];
        console.log(event.target.files)
        setSelectedFiles(files);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        setVisible(false);
    };

    return visible ? (
        <div id="container" className='w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-10 absolute top-0 left-0 z-10 backdrop-blur-sm' onClick={(e) => e.target.id === 'container' && setVisible(false)}>
            <div className='w-1/2 h-1/2 bg-white rounded-md shadow-md'>

                <form onSubmit={handleFormSubmit}>
                    <label className="border-b inline-block px-3 py-1 cursor-pointer w-full">
                        <input type="file" name="" id="" multiple className="m-2" onChange={handleFileChange} />
                    </label>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5 mt-3 inline-block" >Upload</button>
                </form>

                <div className='mt-2'>
                    {selectedFiles.map((file) => (
                        <p key={file.name} className="border-b inline-block px-3 py-1 cursor-pointer w-full">{file.name}</p>
                    ))}
                </div>
            </div>
        </div>
    ) : null;
}

export default Modal;