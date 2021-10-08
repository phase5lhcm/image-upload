import express from 'express';
import dotenv from 'dotenv';
import connectDb from './configs/DBConfig.js';
import userRoute from './routes/userRoute.js';
import fileUpload from 'express-fileupload';

dotenv.config();
connectDb();
const app = express();

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/user', userRoute);
app.listen(5000, () => {
    console.log('App is running');
});
