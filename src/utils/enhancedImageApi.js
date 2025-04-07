import axios from "axios";

const API_KEY = "wxf7tibbp3cwk1ifs";
const BASE_URL = "https://techhk.aoscdn.com/";
const MAXIMUM_RETRIES = 20;

export const enhancedImageAPI = async (file) => {
    try {
        const taskId = await uploadImage(file);
        console.log("Image Uploaded Successfully: ", taskId);

        const enhancedImageData = await PollForEnhancedImage(taskId);
        console.log("Enhanced Image Data: ", enhancedImageData);

        return enhancedImageData;
    } catch (error) {
        console.log("Error enhancing Image: ", error);
    }
};

const uploadImage = async (file) => {
    //code to upload image
    // ("/api/tasks/visual/scale"); --post

    const formData = new FormData();
    formData.append("image_file", file);

    const { data } = await axios.post(
        `${BASE_URL}/api/tasks/visual/scale`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "x-api-key": API_KEY,
            },
        }
    );

    if (!data?.data?.task_id) {
        throw new Error("Failed to upload Image. Task Id not found");
    }
    return data.data.task_id;
};
const fetchEnhancedImage = async (taskId) => {
    console.log("Task Id:", taskId);

    const { data } = await axios.get(
        `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
        {
            headers: {
                "x-api-key": API_KEY,
            },
        }
    );
    if (!data?.data) {
        throw new Error("Failed to fetch Enhanced Image. Image not found");
    }
    return data.data;

    // ("/api/tasks/visual/scale/{task_id}"); --get
};

const PollForEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);

    if (result.state === 4) {
        console.log(`Processing...(${retries}/${MAXIMUM_RETRIES})`);

        if (retries >= MAXIMUM_RETRIES) {
            throw new Error("Max retries reached. Please try again.");
        }

        //wait fr 2 second
        await new Promise((resolve) => setTimeout(resolve, 2000));

        return PollForEnhancedImage(taskId, retries + 1);
    }
    return result;
};
