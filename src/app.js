import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/mail.routes.js';

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1', emailRoutes);

app.listen(port, () => {
  console.log(`mail app listening at http://localhost:${port}`);
});
