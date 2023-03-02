const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const multer  = require('multer');
const upload = require('./config/multer.config')
const { resolve } = require("path");
const port = 8000;
const DB = "ecommerce"
const cors = require('cors')
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
//     apiVersion: "2022-08-01",
// });

// Multer
app.post('/uploads', upload.single('image'), function (req, res, next) {
    // req.file is the `image` file
    // req.body will hold the text fields, if there were any
    console.log('request file: ', req.file , 'request body: ' + req.body)
  })


// middleware
app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}));
app.use(express.static(process.env.STATIC_DIR));


// Connect to the DB using mongoose
require("./config/mongoose.config")(DB)

// modularize routes
require("./routes/product.routes")(app)
require("./routes/order.routes")(app)
require("./routes/stripe.routes")(app)

app.listen(port, () => console.log(`Listening on port: ${port}`) );