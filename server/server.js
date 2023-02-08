const express = require('express');
const app = express();
const { resolve } = require("path");
const port = 8000;
const DB = "ecommerce"
const cors = require('cors')
require('dotenv').config()


// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
//     apiVersion: "2022-08-01",
// });

// middleware
app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}));
app.use(express.static(process.env.STATIC_DIR));


// Connect to the DB using mongoose
require("./config/mongoose.config")(DB)

// modularize routes
require("./routes/product.routes")(app)

app.listen(port, () => console.log(`Listening on port: ${port}`) );