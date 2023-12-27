import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center lg:justify-start">
      {/* Main Heading for Main Page */}
      <h1
        className=" font-bold text-4xl lg:text-6xl md:text-6xl mb-4 md:text-center lg:text-left lg:ml-[5%] lg:mt-[14px]"
        style={{ color: "#3D00C0" }}
      >
        TASK TRACKER
      </h1>
    </div>
  );
};

export default Header;
