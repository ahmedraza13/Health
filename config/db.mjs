import mongoose from "mongoose";
import colors from "colors";

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`MongoDB Error: ${error}`.bgRed.white);
  }
};

export default ConnectDB;
