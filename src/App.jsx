// import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import "./App.css";
import SVGLogo from "./svgs/Logo";
import SVGRings from "./svgs/Rings";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  let timeoutId = setTimeout(() => {
    navigate("/sign-up");
  }, 5000);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative h-screen w-full flex items-center justify-center animate-pulse">
      <div className="absolute">
        <SVGRings />
      </div>
      <div className="absolute">
        <SVGLogo />
      </div>
    </div>
  );
}

export default App;
