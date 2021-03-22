var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const PORT = 8081;

//#region .env
require('dotenv').config();
console.log(`Your API key is ${process.env.MEANINGCLOUD_API_KEY}`);
//#endregion

//#region sentiment analysis API Config
const API_BASE_URL = 'https://api.meaningcloud.com/sentiment-2.1';
//#endregion

const app = express();

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
