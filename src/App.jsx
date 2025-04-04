import React from "react";
import Home from "./components/Home";

const App = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-8 py-4 text-center relative">
            <div className="text-center mb-8 absolute top-5">
                <h1 className="text-2xl font-bold text-gray-800">
                    AI Image Enhancer
                </h1>
                <p className="text-xl text-gray-500">
                    Upload your Image and let AI Enhance to in seconds
                </p>
            </div>
            <Home />
            <div className="text-lg w-full absolute bottom-0 bg-gray-700 text-white py-4">
                Powered By @MayankSankhla
            </div>
        </div>
    );
};

export default App;
