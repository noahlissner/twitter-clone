import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, register, reset } from "../features/auth/authSlice";

import BG from "../assets/images/lohp_1302x955.png";
import Logo from "../assets/images/2021 Twitter logo - white.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  const handleGuestLogin = () => {
    const userData = {
      email: "guest@guest.com",
      password: "guest",
    };

    dispatch(login(userData));
  };

  const inputStyles =
    "w-full text-white outline-none bg-black border-[2px] border-[#536471] rounded-[5px] py-3 pl-2 focus:border-[#1d9bf0]";

  return (
    <div className="flex w-full h-screen">
      {/* Left (BG image) */}
      <div className="flex-1 flex relative">
        <img src={BG} alt="" className="object-cover h-full" />
        <img
          src={Logo}
          alt=""
          className="absolute w-1/3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
      {/* Right, register form */}
      <div className="bg-black min-w-[45vw] p-4 flex items-center justify-center">
        <div className="p-5 flex flex-col w-full items-start">
          <img src={Logo} alt="" className="w-[42px]" />
          <span className="text-white text-[64px] font-bold my-10">
            Twitter Clone
          </span>
          <span className="text-white text-[31px] font-bold mb-6">
            Join Today.
          </span>
          {/* Register Form */}
          <form onSubmit={onSubmit} className="flex flex-col items-start gap-5">
            <div className="flex gap-3">
              {/* Name */}
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={onChange}
                className={inputStyles}
              />
              {/* Email */}
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={onChange}
                className={inputStyles}
              />
              {/* Password */}
            </div>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
              className={inputStyles}
            />
            {/* Confirm Password */}
            <input
              type="password"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
              className={inputStyles}
            />
            <button
              type="submit"
              className="text-white bg-[#1d9bf0] font-[15px] mt-3 w-[300px] 
                h-[38px] rounded-full hover:bg-[#1a8cd8] transition-colors duration-200"
            >
              Register
            </button>
          </form>
          <span className="text-white mt-10 font-[17px] font-bold">
            Already have an account?
          </span>
          <a
            href="/login"
            className="text-[#1d9bf0] font-[15px] mt-5 w-[300px] flex items-center justify-center 
              h-[38px] rounded-full border-[1px] border-[#536471] hover:bg-[#1d9bf01a] transition-colors duration-200"
          >
            Login
          </a>
          <button
            onClick={handleGuestLogin}
            className="text-[#1d9bf0] font-[15px] mt-5 w-[300px] flex items-center justify-center 
            h-[38px] rounded-full border-[1px] border-[#536471] hover:bg-[#1d9bf01a] transition-colors duration-200"
          >
            Login as Guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
