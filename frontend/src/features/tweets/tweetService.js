import axios from "axios";

const API_URL = "https://noah-twitter-clone.herokuapp.com/api/tweets/";

// Create new tweet
const createTweet = async (tweetData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, tweetData, config);

  return response.data;
};

// Get user tweets
const getTweets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

// Detele user tweet
const deleteTweet = async (tweetId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + tweetId, config);

  return response.data;
};

const tweetService = {
  createTweet,
  getTweets,
  deleteTweet,
};

export default tweetService;
