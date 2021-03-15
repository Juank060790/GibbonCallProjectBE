const functions = require("firebase-functions");
// const config = require("./Utils/config");
// const FBAuth = require("./Utils/fbauth");
const cors = require("cors");
const app = require("express")();
app.use(cors());
var indexRouter = require("./routes/index");

app.use("/", indexRouter);

// app.post("/signup", signup);
// app.post("/login", login);

exports.api = functions.https.onRequest(app);
