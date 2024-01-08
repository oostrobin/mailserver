import express from 'express';
import cors from 'cors';
import dotenv from "./src/config/dotenv.config.js"
import emailRoutes from './src/routes/mail.routes.js';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/', emailRoutes);

app.listen(port, () => {
  console.log(`mail app listening at http://localhost:${port}`);
});
