const asyncHandler = require("express-async-handler");

const Tweet = require("../models/tweetModel");
const User = require("../models/userModel");

// @desc    Get tweets
// @route   GET /api/tweets
// @access  Private
const getTweets = asyncHandler(async (req, res) => {
  const tweets = await Tweet.find({ user: req.user.id });
  tweets.forEach((tweet) => {
    console.log(tweet.populate("user"));
  });
  res.status(200).json(tweets);
});

// @desc    New Tweet
// @route   POST /api/tweets
// @access  Private
const newTweet = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text");
  }

  const tweet = await Tweet.create({
    text: req.body.text,
    user: req.user.id,
    name: req.user.name,
  });

  res.status(200).json(tweet);
});

// @desc    Delete Tweet
// @route   DELETE /api/tweets
// @access  Private
const deleteTweet = asyncHandler(async (req, res) => {
  const tweet = await Tweet.findById(req.params.id);

  if (!tweet) {
    res.status(400);
    throw new Error("Tweet not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the tweet user
  if (tweet.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await tweet.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTweets,
  newTweet,
  deleteTweet,
};
