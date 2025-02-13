const express = require("express");


const dotenv = require("dotenv").config();

const app = express();





const PORT = process.env.PORT || 5000;

const connectDB = require("./config/connectionDB");


const cors = require("cors");
app.use(cors());

// make public file static 
app.use(express.static("public"))


connectDB();

app.use(express.json());


app.use("/recipe",require("./routes/recipe"));

app.use("/",require("./routes/user"))

app.listen(PORT,(err)=>{ 
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log(`App is listening at ${PORT}`);
    }

}); 