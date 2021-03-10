const { admin } = require("./admin");

module.exports = (req, res, next) => {
  let idToken;
  if (
    req.headers.authorizations &&
    req.headers.authorizations.startsWith("Bearer ")
  ) {
    idToken = req.headers.authorizations.split("Bearer "[1]);
  } else {
    console.log("No token found");
    return res.status(403).json({ error: "Unauthorized" });
  }

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken;
      return db
        .collection("users")
        .where("userId", "==", req.user.uid)
        .limit(1)
        .get();
    })
    .then((data) => {
      req.user.userName = data.docs[0].data().userName;
      return next();
    })
    .catch((err) => {
      console.error("Error While verifying token ", err);
      return res.status(403).json(err);
    });
};
