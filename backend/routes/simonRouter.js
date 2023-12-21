const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/simonCtrl");

//* require the authorization middleware function

router.post("/encode", usersCtrl.encodeSequence);

module.exports = router;