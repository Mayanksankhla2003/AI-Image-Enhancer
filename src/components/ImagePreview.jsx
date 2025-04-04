const ImagePreview = () => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl m-auto">
            {/* Original Image */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
                    Original Image
                </h2>
                <img
                    src=""
                    alt="Original Image"
                    className="w-full h-full object-cover"
                />
                <div className="flex items-center justify-center h-80  bg-gray-300">
                    No Image Selected
                </div>
            </div>
            {/* Original Image */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font-semibold text-center bg-blue-700 text-white py-2">
                    Enhanced Image
                </h2>
                <img
                    src=""
                    alt="Enhanced Image"
                    className="w-full h-full object-cover"
                />
                <div className="flex items-center justify-center h-80  bg-gray-300">
                    No Image Selected
                </div>
            </div>
        </div>
    );
};

export default ImagePreview;
