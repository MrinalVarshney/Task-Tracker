import React, { useState, useEffect } from "react";

const Alert = ({ message, type, setAlert }) => {
  const [isVisible, setIsVisible] = useState(true);  //for disabling the alert popup after 3 seconds
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setAlert(null);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    // Alert popup
    // for showing success and error messages
    // for 3 seconds
    // will be displayed at bottom centre of the page
    <div
      className={`fixed bottom-10 p-4 left-1/2 transform -translate-x-1/2  rounded-[15px] text-xl ${
        type === "success"
          ? "bg-green-200 text-green-600"
          : "bg-red-100 text-red-500"
      } transition-opacity duration-500 ease-in-out  ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {message}!
    </div>
  );
};

export default Alert;
