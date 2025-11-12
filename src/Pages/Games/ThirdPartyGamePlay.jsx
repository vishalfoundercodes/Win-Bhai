import React from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../Component/Header"; // adjust import path
import { useNavigate } from "react-router-dom";

const PlayGame = () => {
  const [searchParams] = useSearchParams();
  const gameUrl = searchParams.get("url");
  const navigate=useNavigate()

  if (!gameUrl) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        No game selected
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col ">
      {/* ✅ Fixed Header */}
      <div className="fixed top-0 left-0 w-full  shadow-md z-50">
        <Header />
      </div>

      <div
        className="hidden lg2:block mb-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="44" height="44" rx="8" fill="#C10932" />
          <path
            d="M28 31.202L26.2153 33L16.4945 23.2009C16.3378 23.0439 16.2134 22.8572 16.1285 22.6515C16.0437 22.4459 16 22.2253 16 22.0025C16 21.7798 16.0437 21.5592 16.1285 21.3536C16.2134 21.1479 16.3378 20.9612 16.4945 20.8042L26.2153 11L27.9983 12.798L18.8746 22L28 31.202Z"
            fill="white"
          />
        </svg>
      </div>

      {/* ✅ Scrollable Area */}
      <div
        className="mt-[0px] flex-1 overflow-y-auto hide-scrollbar"
        style={{
          WebkitOverflowScrolling: "touch", // smooth scrolling on iOS
          overflowX: "hidden",
        }}
      >
        <iframe
          src={gameUrl}
          title="Game"
          className="w-full min-h-[calc(100vh)] border-none overflow-y-auto"
          allowFullScreen
          allow="autoplay; fullscreen; clipboard-read; clipboard-write; gamepad; accelerometer; gyroscope; scrolling"
          sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock"
          style={{
            display: "block",
            touchAction: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default PlayGame;
