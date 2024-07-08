import mongoose from "mongoose";
export const connectToDB = async(url) =>{
   try {
    await mongoose.connect(url);
    console.log("Connected to the server");
   } catch (error) {
    console.log(error);
   }
}
