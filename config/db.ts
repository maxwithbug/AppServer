import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DATABASE_URL_NODE as string);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;