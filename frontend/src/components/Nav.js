import React from "react";
import { RiHome5Fill, RiHome5Line } from "react-icons/ri";
import { HiHashtag } from "react-icons/hi";
import { BsBellFill, BsBell, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { MdMailOutline, MdEmail } from "react-icons/md";
import {
  RiFileList2Line,
  RiFileList2Fill,
  RiUserLine,
  RiUserFill,
} from "react-icons/ri";
import { CgMoreO } from "react-icons/cg";

const Nav = () => {
  return (
    <nav className="w-full flex flex-col">
      <a href="/" className="w-full flex py-1 group">
        <div className="flex items-center  p-3 group-hover:bg-[rgba(15,20,25,0.1)] rounded-full transition-colors duration-200">
          <RiHome5Line size={26} />
          <p className="hidden xl:block text-xl ml-5 mr-4">Home</p>
        </div>
      </a>
      <a href="/explore" className="w-full flex py-1 group">
        <div className="flex items-center p-3 group-hover:bg-[rgba(15,20,25,0.1)] rounded-full">
          <HiHashtag size={26} />
          <p className="hidden xl:block text-xl ml-5 mr-4">Explore</p>
        </div>
      </a>
      <a href="/notifications" className="w-full flex py-1 group">
        <div className="flex items-center p-3 group-hover:bg-[rgba(15,20,25,0.1)] rounded-full">
          <BsBell size={26} />
          <p className="hidden xl:block text-xl ml-5 mr-4 group">
            Notifications
          </p>
        </div>
      </a>
      <a href="/messages" className="w-full flex py-1 group">
        <div className="flex items-center p-3 group-hover:bg-[rgba(15,20,25,0.1)] rounded-full">
          <MdMailOutline size={26} />
          <p className="hidden xl:block text-xl ml-5 mr-4">Messages</p>
        </div>
      </a>
      <a href="/bookmarks" className="w-full flex py-1 group">
        <div className="flex items-center p-3 group-hover:bg-[rgba(15,20,25,0.1)] rounded-full">
          <BsBookmark size={26} />
          <p className="hidden xl:block text-xl ml-5 mr-4">Bookmarks</p>
        </div>
      </a>
      <a href="/lists" className="w-full flex py-1 group">
        <div className="flex items-center p-3 group-hover:bg-[rgba(15,20,25,0.1)] rounded-full">
          <RiFileList2Line size={26} />
          <p className="hidden xl:block text-xl ml-5 mr-4">Lists</p>
        </div>
      </a>
      <a href="/profile" className="w-full flex py-1 group">
        <div className="flex items-center p-3 group-hover:bg-[rgba(15,20,25,0.1)] rounded-full">
          <RiUserLine size={26} />
          <p className="hidden xl:block text-xl ml-5 mr-4">Profile</p>
        </div>
      </a>
      <a href="/more" className="w-full flex py-1 group">
        <div className="flex items-center p-3 group-hover:bg-[rgba(15,20,25,0.1)] rounded-full">
          <CgMoreO size={26} />
          <p className="hidden xl:block text-xl ml-5 mr-4">More</p>
        </div>
      </a>
    </nav>
  );
};

export default Nav;
