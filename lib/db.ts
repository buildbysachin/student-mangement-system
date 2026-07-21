import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/studentmanagementsystem")
    console.log("mongoDB connected");
}
export default connectDB;