import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Feed from "../containers/Center";
import Sidebar from "../containers/Sidebar";
import Widgets from "../containers/Widgets";

const Home = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
  }, [user, navigate]);

  return (
    <>
      <Sidebar />

      <Feed />

      <Widgets />
    </>
  );
};

export default Home;
