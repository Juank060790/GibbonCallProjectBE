const functions = require("firebase-functions");
const app = require("express")();
const config = require("./Utils/config");
const { signup, login } = require("./Controllers/users");

const firebase = require("firebase");
firebase.initializeApp(config);

app.post("/signup", signup);
app.post("api/login", login);

exports.api = functions.https.onRequest(app);
