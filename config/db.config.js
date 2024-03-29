import mongoose from 'mongoose';

export async function connectDB() {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);
    console.log('CONNECTED TO DB:', dbConnection.connections[0].name);
  } catch (error) {
    console.log('CONNECTION ERROR MESSAGE:', error);
  }
}

// THIS CODE: ESTABLISHES A CONNECTION TO MONGODB DATABASE USING MONGOOSE, LOGS THE CONNECTION STATUS AND THE SERVER'S PORT NUMBER, AND HANDLES CONNECTION ERRORS.
