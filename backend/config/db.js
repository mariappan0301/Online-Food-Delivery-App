import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mariappanr:03012004@cluster0.4tw86.mongodb.net/Food-Del-App').then(()=>console.log("DB Connected"));
}