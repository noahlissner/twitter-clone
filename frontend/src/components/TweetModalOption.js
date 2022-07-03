import React from "react";

const TweetModalOption = ({ icon, option }) => {
  return (
    <div className="text-[#0f1419] p-4 flex items-center gap-3 w-full cursor-default">
      {icon}
      <span>{option}</span>
    </div>
  );
};

export default TweetModalOption;
