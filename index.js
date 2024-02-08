// app.js

const express = require('express');
const bodyParser = require('body-parser');
const database = require('./config/database');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
