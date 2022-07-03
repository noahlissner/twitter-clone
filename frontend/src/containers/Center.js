import React, { useEffect } from "react";
import CreateTweet from "../components/CreateTweet";
import Tweet from "../components/Tweet";
import { useSelector, useDispatch } from "react-redux";
import { getTweets, reset } from "../features/tweets/tweetSlice";

const Feed = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { tweets, isLoading, isError, message } = useSelector(
    (state) => state.tweets
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getTweets());

    return () => {
      dispatch(reset());
    };
  }, [user, isError, message, dispatch]);

  console.log(tweets);

  return (
    <div className="border-r border-l border-[rgb(239, 243, 244)] w-[600px]">
      <CreateTweet />
      {/* Feed */}
      {tweets.map((tweet) => (
        <Tweet key={tweet._id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Feed;
