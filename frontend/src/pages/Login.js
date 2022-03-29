import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import { IoIosClose } from "react-icons/io";

import Logo from "../assets/images/2021 Twitter logo - white.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  const inputStyles =
    "w-full text-white outline-none bg-black border-[2px] border-[#536471] rounded-[5px] py-3 pl-2 focus:border-[#1d9bf0]";

  return (
    <div className="bg-black h-screen w-full">
      <div className="bg-[#5b708366] h-full w-full flex items-center justify-center">
        <div className="bg-black w-[600px] h-[650px] rounded-2xl flex flex-col">
          <div className="flex items-center justify-center relative">
            <img src={Logo} alt="" className="w-[30px] py-3" />
            <a href="/register" className="absolute left-3">
              <IoIosClose color={"#fff"} size={35} />
            </a>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <span className="text-white font-bold text-[31px] mb-12">
              Login to Twitter
            </span>
            <form onSubmit={onSubmit} className="w-[300px] flex flex-col gap-5">
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
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={onChange}
                className={inputStyles}
              />

              {/* Submit button */}
              <button
                type="submit"
                className="text-white bg-[#1d9bf0] font-[15px] mt-2 w-[300px] 
               h-[38px] rounded-full hover:bg-[#1a8cd8] transition-colors duration-200"
              >
                Login
              </button>
            </form>
            <span className="text-[#71767b] font-[15px] mt-10">
              Don't have an account?{" "}
              <a href="/register" className="text-[#1d9bf0]">
                Register
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
