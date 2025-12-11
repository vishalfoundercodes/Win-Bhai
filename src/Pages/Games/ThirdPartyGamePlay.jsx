// // import React from "react";
// // import { useSearchParams } from "react-router-dom";
// // import Header from "../../Component/Header"; // adjust import path
// // import { useNavigate } from "react-router-dom";

// // const PlayGame = () => {
// //   const [searchParams] = useSearchParams();
// //   const gameUrl = searchParams.get("url");
// //   const navigate=useNavigate()

// //   if (!gameUrl) {
// //     return (
// //       <div className="flex items-center justify-center h-screen text-gray-500">
// //         No game selected
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="w-full h-screen flex flex-col ">
// //       {/* ✅ Fixed Header */}
// //       <div className="fixed top-0 left-0 w-full  shadow-md z-50">
// //         <Header />
// //       </div>

//       // <div
//       //   className="hidden lg2:block mb-2 cursor-pointer"
//       //   onClick={() => navigate("/")}
//       // >
//       //   <svg
//       //     width="44"
//       //     height="44"
//       //     viewBox="0 0 44 44"
//       //     fill="none"
//       //     xmlns="http://www.w3.org/2000/svg"
//       //   >
//       //     <rect width="44" height="44" rx="8" fill="#C10932" />
//       //     <path
//       //       d="M28 31.202L26.2153 33L16.4945 23.2009C16.3378 23.0439 16.2134 22.8572 16.1285 22.6515C16.0437 22.4459 16 22.2253 16 22.0025C16 21.7798 16.0437 21.5592 16.1285 21.3536C16.2134 21.1479 16.3378 20.9612 16.4945 20.8042L26.2153 11L27.9983 12.798L18.8746 22L28 31.202Z"
//       //       fill="white"
//       //     />
//       //   </svg>
//       // </div>

// //       {/* ✅ Scrollable Area */}
// //       <div
// //         className="mt-[0px] flex-1 overflow-y-auto hide-scrollbar"
// //         style={{
// //           WebkitOverflowScrolling: "touch", // smooth scrolling on iOS
// //           overflowX: "hidden",
// //         }}
// //       >
// //         <iframe
// //           src={gameUrl}
// //           title="Game"
// //           className="w-full min-h-[calc(100vh)] border-none overflow-y-auto"
// //           allowFullScreen
// //           allow="autoplay; fullscreen; clipboard-read; clipboard-write; gamepad; accelerometer; gyroscope; scrolling"
// //           sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock"
// //           style={{
// //             display: "block",
// //             touchAction: "auto",
// //           }}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default PlayGame;

// import React from "react";
// import { useSearchParams } from "react-router-dom";
// import Header from "../../Component/Header"; // adjust import path
// import { useNavigate } from "react-router-dom";

// const PlayGame = () => {
//   const [searchParams] = useSearchParams();
//   const gameUrl = searchParams.get("url");
//   const navigate = useNavigate();

//   if (!gameUrl) {
//     return (
//       <div className="flex items-center justify-center h-screen text-gray-500">
//         No game selected
//       </div>
//     );
//   }

//   return (
//     <div
//       className="w-full flex flex-col"
//       style={{ height: "100dvh" }} // Dynamic viewport height
//     >
//       {/* ✅ Fixed Header */}
//       <div className="w-full shadow-md z-50 bg-black2 flex-shrink-0 lg2:hidden">
//         <Header />
//       </div>

//       {/* Back Button */}
//       <div
//         className="hidden lg2:block mb-2 cursor-pointer"
//         onClick={() => navigate("/")}
//       >
//         <svg
//           width="44"
//           height="44"
//           viewBox="0 0 44 44"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect width="44" height="44" rx="8" fill="#C10932" />
//           <path
//             d="M28 31.202L26.2153 33L16.4945 23.2009C16.3378 23.0439 16.2134 22.8572 16.1285 22.6515C16.0437 22.4459 16 22.2253 16 22.0025C16 21.7798 16.0437 21.5592 16.1285 21.3536C16.2134 21.1479 16.3378 20.9612 16.4945 20.8042L26.2153 11L27.9983 12.798L18.8746 22L28 31.202Z"
//             fill="white"
//           />
//         </svg>
//       </div>

//       {/* ✅ Game Container - Takes remaining space */}
//       <div className="w-full flex-1 overflow-hidden">
//         <iframe
//           src={gameUrl}
//           title="Game"
//           className="w-full h-full border-none"
//           allowFullScreen
//           allow="autoplay; fullscreen; clipboard-read; clipboard-write; gamepad; accelerometer; gyroscope; scrolling"
//           sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock"
//           style={{
//             display: "block",
//             touchAction: "auto",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default PlayGame;

// import { useSearchParams } from "react-router-dom";
// import Header from "../../Component/Header";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// const PlayGame = () => {
//   const [searchParams] = useSearchParams();
//   const gameUrl = searchParams.get("url");
//   const navigate = useNavigate();
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   // Handle browser back button
//   useEffect(() => {
//     const handlePopState = () => {
//       setIsFullscreen(false);
//     };

//     window.addEventListener("popstate", handlePopState);

//     return () => {
//       window.removeEventListener("popstate", handlePopState);
//     };
//   }, []);

//   // Handle game container click for mobile
//   const handleGameClick = () => {
//     console.log("handle game click clicked")
//     // Only trigger on mobile devices (screen width < 1024px, which is lg2 breakpoint)
//     if (window.innerWidth < 1024) {
//       console.log("screen below 1024")
//       setIsFullscreen(true);
//       // Add a state to browser history so back button works
//       window.history.pushState({ fullscreen: true }, "");
//     }
//   };

//   if (!gameUrl) {
//     return (
//       <div className="flex items-center justify-center h-screen text-gray-500">
//         No game selected
//       </div>
//     );
//   }

//   return (
//     <div className="w-full flex flex-col" style={{ height: "100dvh" }}>
//       {/* Header - Hidden when fullscreen on mobile */}
//       <div
//         className={`w-full shadow-md z-50 bg-black2 flex-shrink-0 lg2:hidden transition-all duration-300 ${
//           isFullscreen ? "hidden" : "block"
//         }`}
//       >
//         <Header />
//       </div>

//       {/* Back Button for Desktop */}
//       <div
//         className="hidden lg2:block mb-2 cursor-pointer"
//         onClick={() => navigate("/")}
//       >
//         <svg
//           width="44"
//           height="44"
//           viewBox="0 0 44 44"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <rect width="44" height="44" rx="8" fill="#C10932" />
//           <path
//             d="M28 31.202L26.2153 33L16.4945 23.2009C16.3378 23.0439 16.2134 22.8572 16.1285 22.6515C16.0437 22.4459 16 22.2253 16 22.0025C16 21.7798 16.0437 21.5592 16.1285 21.3536C16.2134 21.1479 16.3378 20.9612 16.4945 20.8042L26.2153 11L27.9983 12.798L18.8746 22L28 31.202Z"
//             fill="white"
//           />
//         </svg>
//       </div>

//       {/* Game Container - Takes full screen when clicked on mobile */}
//       <div
//         className={`w-full overflow-hidden ${
//           isFullscreen ? "h-screen fixed inset-0 z-50" : "flex-1"
//         }`}
//         onClick={handleGameClick}
//       >
//         <iframe
//           src={gameUrl}
//           title="Game"
//           className="w-full h-full border-none"
//           allowFullScreen
//           allow="autoplay; fullscreen; clipboard-read; clipboard-write; gamepad; accelerometer; gyroscope; scrolling"
//           sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock"
//           style={{
//             display: "block",
//             touchAction: "auto",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default PlayGame;

import { useSearchParams } from "react-router-dom";
import Header from "../../Component/Header";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PlayGame = () => {
  const [searchParams] = useSearchParams();
  const gameUrl = searchParams.get("url");
  const navigate = useNavigate();
  const [isFullscreen, setIsFullscreen] = useState(false);
    const location = useLocation();
    const htmlContent = location.state?.html;

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      setIsFullscreen(false);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Handle game container click for mobile
  const handleGameClick = () => {
    console.log("handle game click clicked");
    // Only trigger on mobile devices (screen width < 1024px, which is lg2 breakpoint)
    if (window.innerWidth < 1024 && !isFullscreen) {
      console.log("screen below 1024");
      setIsFullscreen(true);
      // Add a state to browser history so back button works
      window.history.pushState({ fullscreen: true }, "");
    }
  };

  if (!gameUrl) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        No game selected
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col" style={{ height: "100dvh" }}>
      {/* Header - Hidden when fullscreen on mobile */}
      <div
        className={`w-full shadow-md z-50 bg-black2 flex-shrink-0 lg2:hidden transition-all duration-300 ${
          isFullscreen ? "hidden" : "block"
        }`}
      >
        <Header />
      </div>

      {/* Back Button for Desktop */}
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

      {/* Game Container - Takes full screen when clicked on mobile */}
      <div
        className={`w-full overflow-hidden ${
          isFullscreen ? "h-screen fixed inset-0 z-50" : "flex-1"
        }`}
        onClick={handleGameClick}
      >
        {/* <iframe
          src={gameUrl}
          title="Game"
          className="w-full h-full border-none"
          allowFullScreen
          allow="autoplay; fullscreen; clipboard-read; clipboard-write; gamepad; accelerometer; gyroscope; scrolling"
          sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock"
          style={{
            display: "block",
            touchAction: "auto",
          }}
        /> */}
        <iframe
          src={gameUrl}
          title="Game"
          className="w-full h-full border-none"
          allowFullScreen="allowfullscreen"
          allow="autoplay; fullscreen *; clipboard-read; clipboard-write; gamepad; accelerometer; gyroscope"
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


// import { useLocation, useNavigate } from "react-router-dom";

// const PlayGame = () => {
//   const location = useLocation();
//   const htmlContent = location.state?.html;

//   if (!htmlContent) {
//     return <div>No game loaded</div>;
//   }

//   return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
// };

// export default PlayGame;
