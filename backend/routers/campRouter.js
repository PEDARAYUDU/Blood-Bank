const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const {connectToDatabase}=require('../db.config');
const router = express.Router();


dotenv.config(); // Load environment variables from .env file

const app = express();
const port = 5000;

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected successfully to the database');
// });

app.use('/auth', require('./authRouter'));
app.use('/userRouter', require('./userRouter'));
app.use('/bank', require('./bankRouter'));
// app.use('/camps', require('./routers/campRouter'));

app.get('/api/sample', (req, res) => {
  res.send('Hello, this is a GET from Vinay');
});

connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});

// app.listen(port, () =>
// console.log(`Server running at https://localhost:${port}`)
// );

module.exports = router;