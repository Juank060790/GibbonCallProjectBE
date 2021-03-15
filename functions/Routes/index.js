var express = require("express");
var router = express.Router();

// authApi
const authApi = require("./authApi");
router.use("/", authApi);

//

module.exports = router;
