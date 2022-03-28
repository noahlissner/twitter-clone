import React from "react";
import { useNavigate } from "react-router-dom";

import Feed from "../containers/Center";
import Sidebar from "../containers/Sidebar";
import Widgets from "../containers/Widgets";

const Home = () => {
  return (
    <>
      <Sidebar />

      <Feed />

      <Widgets />
    </>
  );
};

export default Home;
