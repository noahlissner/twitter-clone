import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import Nav from "../components/Nav";
import Logo from "../assets/images/2021 Twitter logo - blue.png";
import { FaUserCircle } from "react-icons/fa";
import { FiMoreHorizontal, FiCheck } from "react-icons/fi";
import { ReactComponent as TweetSmall } from "../assets/svg/tweet-sm.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const toggleProfileCard = () => {
    document.getElementById("profile-card").classList.toggle("hidden");
  };

  return (
    <div className="flex-1 flex justify-end ml-[100px] md:ml-0">
      <div className="w-[88px] xl:w-[275px] fixed top-0 h-screen">
        {/* Inner menu */}
        <div className="px-3 flex flex-col justify-between h-full overflow-auto">
          {/* Upper */}
          <div className="w-full">
            {/* LOGO */}
            <div className="py-0.5 min-h-[52px] flex items-center">
              <div className="pl-3">
                <img src={Logo} alt="Logo" className="w-[28px]" />
              </div>
            </div>
            {/* NAV */}
            <div>
              <Nav />
            </div>
            {/* Tweet button */}
            <div className="w-[90%] my-4">
              <a href="#" className="min-h-5 group">
                <div className="max-w-[52px] h-[52px] xl:max-w-full bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white w-full rounded-full py-3 flex items-center justify-center transition-colors duration-200">
                  <span className="hidden xl:block text-xl font-bold">
                    Tweet
                  </span>
                  <TweetSmall className="xl:hidden h-6" />
                </div>
              </a>
            </div>
          </div>
          {/* Lower */}
          <div className="my-3" onClick={toggleProfileCard}>
            <div
              id="profile-card"
              className="bg-white fixed w-[300px] h-[200px] bottom-[90px] rounded-[20px] hidden"
            >
              <div className="py-3 flex flex-col h-full">
                <div className="grow">
                  <div className="flex items-center cursor-pointer p-3">
                    <FaUserCircle size={40} />
                    <div className="flex pl-3 flex-col text-[15px]">
                      <p className="font-bold">{user?.name}</p>
                      <p>@{user?.name.replace(/\s+/g, "_").toLowerCase()}</p>
                    </div>
                    <div className="flex flex-1 justify-end">
                      <FiCheck size={19} color={"#1d9bf0"} />
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer h-[52px] flex items-center justify-center hover:bg-[#f7f9f9] transition-colors duration-200">
                  <p className="p-4 w-full">Add an existing account</p>
                </div>
                <div
                  onClick={onLogout}
                  className="cursor-pointer h-[52px] flex items-center justify-center hover:bg-[#f7f9f9] transition-colors duration-200"
                >
                  <p className="p-4 w-full">
                    Log out @{user?.name.replace(/\s+/g, "_").toLowerCase()}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center hover:bg-[rgba(15,20,25,0.1)] cursor-pointer rounded-full p-3 transition-colors duration-200">
              <FaUserCircle size={40} />
              <div className="hidden xl:flex pl-3 flex-col text-[15px]">
                <p className="font-bold">{user?.name}</p>
                <p>@{user?.name.replace(/\s+/g, "_").toLowerCase()}</p>
              </div>
              <div className="hidden xl:flex flex-1 justify-end">
                <FiMoreHorizontal size={19} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
