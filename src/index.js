const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect(
    "mongodb+srv://rafael:rafael4455@@@cluster0-umxyp.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    }
    );
    
    app.use(express.static("public"));
    app.use(express.json());
    app.use(cors());

app.use(express.urlencoded({ extended: true }));

const nunjucks = require("nunjucks");

nunjucks.configure("src", {
  express: app,
  noCache: true
});

app.use(require("./routes"));

app.listen(4000);
