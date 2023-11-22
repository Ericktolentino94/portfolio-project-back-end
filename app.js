const express = require("express");
const cors = require("cors");
const app = express();
const stocksController = require("./controllers/stocksController");

app.use(cors());
app.use(express.json());

app.use("/stocks", stocksController);

app.get("/", (req, res) => {
    res.send("Welcome to stocks with Postgres");
});

app.get("*", (req, res) => {
    res.status(404).json({success: false, data: {error: "Page not found"}});
});

module.exports = app;