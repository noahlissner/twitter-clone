import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTweet } from "../features/tweets/tweetSlice";
import { BsStars, BsEmojiSmile, BsCalendar4 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { BiImage, BiPoll } from "react-icons/bi";
import { AiOutlineGif } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const CreateTweet = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createTweet({ text }));
    setText("");
  };

  return (
    <div className="border-b">
      {/* Wrapper */}
      <div className="flex flex-col px-4">
        {/* Upper */}
        <div className="h-[53px] flex items-center justify-between">
          <span className="font-bold text-xl">Home</span>
          <div className="hover:bg-[rgba(15,20,25,0.1)] cursor-pointer rounded-full p-2 transition-colors duration-200">
            <BsStars size={20} />
          </div>
        </div>
        {/* Center */}
        <div className="py-1 flex">
          <div className="pr-3">
            <FaUserCircle size={48} />
          </div>
          <form onSubmit={onSubmit} className="w-full">
            <textarea
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What's happening?"
              className="border-b outline-none w-full p-2 resize-none placeholder-[#0f1419] text-xl"
            ></textarea>
            <div className="flex justify-between items-center py-1.5">
              <div className="flex gap-2 items-center">
                <div className="hover:bg-[#1d9bf01a] cursor-pointer p-1.5 rounded-full transition-colors duration-200">
                  <BiImage size={20} className="text-[#1d9bf0]" />
                </div>
                <div className="hover:bg-[#1d9bf01a] cursor-pointer p-1.5 rounded-full transition-colors duration-200">
                  <AiOutlineGif size={20} className="text-[#1d9bf0]" />
                </div>
                <div className="hover:bg-[#1d9bf01a] cursor-pointer p-1.5 rounded-full transition-colors duration-200">
                  <BiPoll size={20} className="text-[#1d9bf0]" />
                </div>
                <div className="hover:bg-[#1d9bf01a] cursor-pointer p-1.5 rounded-full transition-colors duration-200">
                  <BsEmojiSmile size={20} className="text-[#1d9bf0]" />
                </div>
                <div className="hover:bg-[#1d9bf01a] cursor-pointer p-1.5 rounded-full transition-colors duration-200">
                  <BsCalendar4 size={20} className="text-[#1d9bf0]" />
                </div>
                <div className="hover:bg-[#1d9bf01a] cursor-pointer p-1.5 rounded-full transition-colors duration-200">
                  <GoLocation size={20} className="text-[#1d9bf0]" />
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white px-5 py-2 rounded-full font-bold text-[15px] transition-colors duration-200"
              >
                Tweet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
