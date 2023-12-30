// app.js
const express = require('express');
const router = express.Router();

const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { connectToDatabase } = require('./db.config');

dotenv.config();

const app = express();
// const port = process.env.PORT||5000;
const port = 5000;

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
app.use('/auth', require('./routers/authRouter'));
app.use('/user', require('./routers/userRouter'));
app.use('/bank', require('./routers/bankRouter'));
// app.use('/camps', require('./routers/campRouter.js'));

// Register your routes here
app.get('/api/sample1', (req, res) => {
  res.send('Hello, this is a GET from Vinay');
});

// Connect to MongoDB, then start the server
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server running and in app.js  at http://localhost:${port}`);
  });
});
// module.exports = router;