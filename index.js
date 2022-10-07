/* eslint-disable import/extensions */
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import router from './routes/route.js';

// eslint-disable-next-line prettier/prettier
const DB_URL = 'mongodb+srv://Alex:qwerty123@cluster0.v4mew5u.mongodb.net/delivery-app?retryWrites=true&w=majority';

const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 3000;
// const { DB_USER } = process.env;
// const { DB_PASSWORD } = process.env;
// const { DB_NAME } = process.env;

// eslint-disable-next-line prettier/prettier
// const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.v4mew5u.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log('Server working...');
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
