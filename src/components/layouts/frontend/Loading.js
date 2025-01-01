import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center gap-3">
      <img
        src="/images/frontend/logo.png"
        alt=""
        className="w-[200px] h-[48px]"
      />
      <div className="w-8 h-8 border-4 border-[#7BB101] border-t-transparent rounded-full animate-spin-fast"></div>
    </div>
  );
};

export default Loading;
