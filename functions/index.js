const functions = require("firebase-functions");
const config = require("./Utils/config");
const { signup, login } = require("./Controllers/users");
const cors = require("cors");
const app = require("express")();
// const FBAuth = require("./Utils/fbauth");
app.use(cors());

app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.https.onRequest(app);
