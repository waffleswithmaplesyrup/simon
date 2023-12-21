const jwt = require("jsonwebtoken");

const debug = require("debug")("simon:controllers:simonCtrl");

function encodeSequence(req, res) {
  debug("sequence received: %o", req.body);

  const sequence = req.body;
  const token = createJWT(sequence);
  
  debug("scrambled sequence: %o", token);

  res.json({ token: token });
}

//* ===== Helper Functions ===== *//

function createJWT(sequence) {
  return jwt.sign({ sequence }, process.env.SECRET);
}

module.exports = {
  encodeSequence
};