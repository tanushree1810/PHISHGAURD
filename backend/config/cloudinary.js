import {v2 as Cloudinary} from "cloudinary"

const connectCloudinary=async()=>{
    
    Cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_API_SECRET,
        
    })
    console.log("Cloudinary configured successfully!");
}

export default connectCloudinary;

