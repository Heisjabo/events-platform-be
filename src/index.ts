import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import routes from './routes/index';
import morgan from 'morgan';
dotenv.config()
const PORT = process.env.PORT || 5000;
 
const app = express();
connectDB()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'))
app.use('/api/v1', routes)

app.get('/', (req, res) => {
  res.send('Welcome to Etite Events Platform');
});

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));

export default app;