const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const routesHandler = require("./routes/handler.js");
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

//Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routesHandler);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    next();
});

//DB Connection
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, UseUnifiedTopology: true })
    .then(() => {
        console.log('DB Connected');
    })
    .catch((err) => {
        console.log(err);
    });

const PORT = process.env.PORT || 4000; // backend routing port

app.listen(PORT, () => {
    //console.log("Server is running on port ${PORT}.");
    console.log(`Server is running on ${PORT}`);
});
