import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tweetService from "./tweetService";

const initialState = {
  tweets: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create new tweet
export const createTweet = createAsyncThunk(
  "tweets/create",
  async (tweetData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await tweetService.createTweet(tweetData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user tweets
export const getTweets = createAsyncThunk(
  "tweets/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await tweetService.getTweets(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete user tweet
export const deleteTweet = createAsyncThunk(
  "tweets/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await tweetService.deleteTweet(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTweet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTweet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tweets.push(action.payload);
      })
      .addCase(createTweet.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTweets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tweets = action.payload;
      })
      .addCase(getTweets.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteTweet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTweet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tweets = state.tweets.filter(
          (tweet) => tweet._id !== action.payload.id
        );
      })
      .addCase(deleteTweet.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = tweetSlice.actions;
export default tweetSlice.reducer;
