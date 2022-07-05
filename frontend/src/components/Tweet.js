import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiMoreHorizontal, FiShare } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoGraph } from "react-icons/go";
import moment from "moment";
import { useSelector } from "react-redux";
import TweetModal from "./TweetModal";

const Tweet = ({ tweet }) => {
  const ref = useRef();

  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.addEventListener("mousedown", checkIfClickedOutside);
    };
  }, [open]);

  return (
    <div
      className={`relative border-b cursor-pointer transition-colors duration-100 ${
        !open && "hover:bg-[#00000008]"
      }`}
    >
      {/* Wrapper */}
      <div className="px-4 flex py-3">
        {/* user image (left side) */}
        <div className="mr-3">
          <FaUserCircle size={48} />
        </div>
        {/* Content (right side) */}
        <div className="flex flex-col w-full">
          {/* User info */}
          <div className="flex justify-between items-center">
            <div className="text-[15px] text-[#0f1419] flex items-center gap-1">
              <span className="font-bold hover:underline">{tweet.name}</span>
              <span>@{tweet?.name.replace(/\s+/g, "_").toLowerCase()}</span>
              <BsDot />

              <span className="hover:underline">
                {moment(tweet?.createdAt).fromNow()}
              </span>
            </div>
            {user?._id === tweet?.user && (
              <div
                onClick={() => setOpen(true)}
                className="hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] p-2 rounded-full transition-colors duration-200"
              >
                <FiMoreHorizontal size={18} color="currentColor" />
              </div>
            )}
            {open && (
              <div
                ref={ref}
                className="absolute z-[100] w-full max-w-[300px] bg-white border right-5 top-10 overflow-hidden rounded-lg shadow-lg"
              >
                <TweetModal id={tweet?._id} />
              </div>
            )}
          </div>
          {/* Text/Messsage */}
          <div>
            <p className="text-[15px] text-[#0f1419]">{tweet?.text}</p>
          </div>
          {/* Features */}
          <div className="mt-3 flex justify-between max-w-[425px]">
            <div className="text-[#536471] hover:text-[#1d9bf0] hover:bg-[#1d9bf01a] p-2 rounded-full transition-colors duration-200">
              <BiMessageRounded size={18} color="currentColor" />
            </div>
            <div className="text-[#536471] hover:text-[#00ba7c] hover:bg-[#00ba7c1a] p-2 rounded-full transition-colors duration-200">
              <AiOutlineRetweet size={18} color="currentColor" />
            </div>
            <div className="text-[#536471] hover:text-[#f91880] hover:bg-[#f918801a] p-2 rounded-full transition-colors duration-200">
              <IoIosHeartEmpty size={18} color="currentColor" />
            </div>
            <div className="text-[#536471] hover:text-[#1d9bf0] hover:bg-[#1d9bf01a] p-2 rounded-full transition-colors duration-200">
              <FiShare size={18} color="currentColor" />
            </div>
            <div className="text-[#536471] hover:text-[#1d9bf0] hover:bg-[#1d9bf01a] p-2 rounded-full transition-colors duration-200">
              <GoGraph size={18} color="currentColor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
