import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";

const Home = () => {
    const [uploadImage, setuploadImage] = useState(null);
    const [enhancedImage, setenhancedImage] = useState(null);
    const [loading, setloading] = useState(false);

    const UploadImageHandler = (file) => {
        setuploadImage(URL.createObjectURL(file));
        setloading(true);
        //calling API to enhance the image
    };
    return (
        <div className="w-[90%] gap-20 grid">
            <ImageUpload UploadImageHandler={UploadImageHandler} />

            <ImagePreview
                loading={loading}
                uploaded={uploadImage}
                enhanced={enhancedImage}
            />
        </div>
    );
};

export default Home;
