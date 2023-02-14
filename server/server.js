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

//  Multer Errors
// app.post('/uploads', function (req, res) {
//     upload(req, res, function (err) {
//       if (err instanceof multer.MulterError) {
//         // A Multer error occurred when uploading.
//         console.log(`Multer error: ${err} occured`)
//       } else if (err) {
//         // An unknown error occurred when uploading.
//         console.log(`Unknown error: ${err} occured when uploading image`)
//       }
  
//       // Everything went fine.
//     })
//   })



// middleware
app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}));
app.use(express.static(process.env.STATIC_DIR));


// Connect to the DB using mongoose
require("./config/mongoose.config")(DB)

// modularize routes
require("./routes/product.routes")(app)

app.listen(port, () => console.log(`Listening on port: ${port}`) );