import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhancedImageApi";

const Home = () => {
    const [uploadImage, setuploadImage] = useState(null);
    const [enhancedImage, setenhancedImage] = useState(null);
    const [loading, setloading] = useState(false);

    const UploadImageHandler = async (file) => {
        setuploadImage(URL.createObjectURL(file));
        setloading(true);
        try {
            //calling API to enhance the image
            const enhancedURL = await enhancedImageAPI(file);
            setenhancedImage(enhancedURL);
            setloading(false);
        } catch (error) {
            console.log(error);
            alert("Error enhancing image. Please try again.");
        }
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
