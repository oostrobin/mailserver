const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./src/routes/mail.routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, this is your mail-sending app!');
});

// Mount the emailRoutes at the /api path
app.use('/api', emailRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
