const functions = require("firebase-functions");
const cors = require("cors");
const app = require("express")();
app.use(cors());
var indexRouter = require("./routes/index");

app.use("/", indexRouter);

exports.api = functions.https.onRequest(app);
