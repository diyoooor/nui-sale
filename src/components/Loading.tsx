import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full w-screen  bg-blue-200 z-50 fixed bg-opacity-50">
      <div className="w-16 h-16 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
