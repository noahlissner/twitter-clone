import React from "react";
import { IoTrashOutline, IoCodeSlash } from "react-icons/io5";
import { BsPin, BsClipboardPlus } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { deleteTweet } from "../features/tweets/tweetSlice";

const TweetModal = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTweet(id));
  };

  const optionStyle =
    "text-[#0f1419] p-4 flex items-center gap-3 w-full cursor-default";
  return (
    <div className="absolute z-[100] w-full max-w-[300px] bg-white border right-5 top-10 overflow-hidden rounded-lg shadow-lg">
      <div
        onClick={handleDelete}
        className="text-[#f4212e] p-4 flex items-center gap-3 w-full hover:bg-[#00000008]"
      >
        <IoTrashOutline />
        <span>Delete</span>
      </div>
      <div className={optionStyle}>
        <BsPin />
        <span>Pin to your profile</span>
      </div>
      <div className={optionStyle}>
        <BsClipboardPlus />
        <span>Add/remove from Lists</span>
      </div>
      <div className={optionStyle}>
        <FaRegComment />
        <span>Change who can reply</span>
      </div>
      <div className={optionStyle}>
        <IoCodeSlash />
        <span>Embed Tweet</span>
      </div>
      <div className={optionStyle}>
        <VscGraph />
        <span>View Tweet analytics</span>
      </div>
    </div>
  );
};

export default TweetModal;
