import React from "react";
import { RiHome5Line } from "react-icons/ri";

const NavItem = ({ href, icon, text }) => {
  return (
    <a href={href} className="w-full flex py-1 group">
      <div className="flex items-center  p-3 group-hover:bg-[rgba(15,20,25,0.1)] rounded-full transition-colors duration-200">
        {icon}
        <p className="hidden xl:block text-xl ml-5 mr-4">{text}</p>
      </div>
    </a>
  );
};

export default NavItem;
