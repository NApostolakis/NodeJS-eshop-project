const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Error);

app.listen(3000);
