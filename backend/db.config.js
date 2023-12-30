const mongoose = require('mongoose');

const uri = "mongodb+srv://pshiva:shiva507@cluster0.qc8wvyz.mongodb.net/?retryWrites=true&w=majority";

// Mongoose connection options
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase the timeout to 30 seconds
};

async function connectToDatabase() {
  try {
    // Connect using Mongoose
    await mongoose.connect(uri, mongooseOptions);
    console.log("Connected to MongoDB using Mongoose!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = { connectToDatabase };
