const admin = require("firebase-admin");
firebase.initializeApp(firebaseConfig);
const db = admin.firestore();

module.exports = { admin, db };
