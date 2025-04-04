
const ImageUpload = () => {
    return (
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full">
            <label
                htmlFor="fileInput"
                className="block w-full cursor-pointer border-2 border-dashed border-gray-500 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
            >
                <input type="file" id="fileInput" className="hidden"></input>
                <span className="text-lg font-medium text-gray-600">
                    Click and drag to upload your Image
                </span>
            </label>
        </div>
    );
};

export default ImageUpload;
