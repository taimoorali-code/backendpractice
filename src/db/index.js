import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDb = async () => {
  try {
    const mongodbURI = process.env.MONGODB_URI; // Retrieve MongoDB URI from environment variable
    
    if (!mongodbURI) {
      throw new Error('MongoDB URI not found in environment variables');
    }

    const dbURI = `${mongodbURI}/${DB_NAME}`;
    
    const connectInstance = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Database is connected to ${connectInstance.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export default connectDb;
