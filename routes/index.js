const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/message", (req, res) => {
  Message.create({ ...req.body })
    .then((message) => {
      res.status(200).json({ message });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ error, message: "There was an error sending the message" });
    });
});

module.exports = router;
