import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";

const Home = () => {
    return (
        <div className="w-[90%] gap-20 grid">
            <ImageUpload />

            <ImagePreview />
        </div>
    );
};

export default Home;
