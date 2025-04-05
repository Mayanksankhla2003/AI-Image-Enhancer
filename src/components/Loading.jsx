import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-full gap-3">
            <img
                class="w-8 h-8 animate-spin"
                src="https://www.svgrepo.com/show/70469/loading.svg"
                alt="Loading icon"
            ></img>
            <div className="text-[#2fe4c6] text-xl">Processing ...</div>
        </div>
    );
};

export default Loading;
