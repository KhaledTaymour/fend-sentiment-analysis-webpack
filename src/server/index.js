var path = require("path");
const mockAPIResponse = require("./mockAPI.js");
const PORT = 8081;

//#region .env
require("dotenv").config();
console.log(`Your API key is ${process.env.MEANINGCLOUD_API_KEY}`);
//#endregion

//#region sentiment analysis API Config
const API_BASE_URL = "https://api.meaningcloud.com/sentiment-2.1";
//#endregion

//#region express
const express = require("express");
const app = express();
app.use(express.static("dist"));
//#endregion

//#region cors
const cors = require("cors");
app.use(cors());
//#endregion

//#region bodyParser
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
//#endregion

//#region axios
const axios = require("axios");
//#endregion

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// handle post requst
app.post("/analyze-url", async (req, res) => {
  try {
    const url = req.body.url;
    const sentimentAnalysisURL = `${API_BASE_URL}?key=${process.env.MEANINGCLOUD_API_KEY}&url=${url}&lang=en`;
    const data = await axios(sentimentAnalysisURL);

    console.log(`data.data.sentence_list[0] ${data.data.sentence_list[0]}`);

    res.send({
      agreement: data.data.agreement,
      subjectivity: data.data.subjectivity,
      irony: data.data.irony,
      confidence: data.data.confidence,
      score_tag: data.data.score_tag,
      text: data.data.sentence_list[0].text,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
