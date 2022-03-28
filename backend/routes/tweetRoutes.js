const express = require("express");
const {
  getTweets,
  newTweet,
  deleteTweet,
} = require("../controllers/tweetController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getTweets);
router.post("/", protect, newTweet);
router.delete("/:id", protect, deleteTweet);

module.exports = router;
