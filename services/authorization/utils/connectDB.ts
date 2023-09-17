import { connect } from "mongoose";

const connectDB = async () => {
  await connect("mongodb://root:example@mongo:27017/");
  console.info("Connected to MongoDB 🚀");
};

export default connectDB;
