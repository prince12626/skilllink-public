import React, { useEffect } from "react";
import { useUser } from "../context/user.context";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.loggedin==false) {
      navigate("/auth/login");
    }
  }, [user.loggedin, navigate]);

  if (!user.loggedin) {
    return <div className="flex justify-center items-center h-screen bg-[#0a0f24]">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>; // or a spinner
  }

  return <>{children}</>;
};

export default Protected;
