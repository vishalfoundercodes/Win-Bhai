// import React from "react";
// import { useLocation } from "react-router-dom";
// import Header from "../../Component/Header";
// import Footer from "../../Component/Footer";
// import Footer2 from "../../Component/Footer2";
// import Header2 from "../../Component/Header2";
// import AvitatorLayout from "../InhouseGames/AviatorGame/AvitatorLayout"
// import AviatorHome from "../InhouseGames/AviatorGame/AviatorHome"
// import ChickenRoadLayout from "../InhouseGames/ChickenRoadGame/GameComponent/ChickenRoadLayout"
// import ChickenRoadGame from "../InhouseGames/ChickenRoadGame/GameComponent/Game";
// // import ChickenRoadLayout from "../InhouseGames/ChickenRoadGame/GameComponent/ChickenRoadLayout" --- IGNORE ---
// export default function Layout({ children }) {
//   const location = useLocation();
//   // 👇 Custom layouts for game routes
  // if (location.pathname === "/aviator") {
  //   return <AvitatorLayout component={<AviatorHome />} />;
  // }

  // if (location.pathname === "/chickenRoadGame") {
  //   return <ChickenRoadLayout component={<ChickenRoadGame />} />;
  // }
//   // List of paths where Footer should be hidden
//   const hideFooterPaths = ["/wallet", "/signup", "/login", "/lottery/wingo"];
//   const hideHeaderPaths = [
//     "/cuppon",
//     "/RedeemBonus",
//     "/Bonus",
//     "/Notification",
//     "/Info",
//     "/changePassword",
//     "/downloadAPK",
//     "/lottery/wingo",
//   ];

//   const hideHeaderAll = ["/signup", "/login"];
//   const shouldHideFooter = hideFooterPaths.includes(location.pathname);
//   const shouldShowHeader2 = hideHeaderPaths.includes(location.pathname);
//   const shouldHideHeader = hideHeaderAll.includes(location.pathname);
//     const isWingoPath = location.pathname === "/lottery/wingo";
//   return (
//     <div className={`${isWingoPath ? "bg-red2" : "bg-grayBg"}`}>
//       {/* {shouldShowHeader2 ? <Header2 /> : <Header />} */}
//       {!shouldHideHeader && (shouldShowHeader2 ? <Header2 /> : <Header />)}
//       {/* <Header /> */}
//       {children}
//       {!shouldHideFooter && (
//         <div className=" sticky bottom-0">
//           <div className="md:hidden">
//             {" "}
//             <Footer />
//           </div>
//           <div className="hidden md:block lg:hidden">
//             {" "}
//             <Footer2 />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Footer2 from "../../Component/Footer2";
import Header2 from "../../Component/Header2";
import AvitatorLayout from "../InhouseGames/AviatorGame/AvitatorLayout"
import AviatorHome from "../InhouseGames/AviatorGame/AviatorHome"
import ChickenRoadLayout from "../InhouseGames/ChickenRoadGame/GameComponent/ChickenRoadLayout";
// import ChickenRoadLayout from "../InhouseGames/ChickenRoadGame/GameComponent/ChickenRoadLayout"
import Game from "../InhouseGames/ChickenRoadGame/GameComponent/Game";

export default function Layout({ children }) {
  const location = useLocation();
  // if (location.pathname === "/aviator") {
  //   return <AvitatorLayout component={<AviatorHome />} />;
  // }

  // if (location.pathname === "/chickenRoadGame") {
  //   return <ChickenRoadLayout component={<ChickenRoadGame />} />;
  // }
  // List of paths where Footer should be hidden
  const hideFooterPaths = [
    "/wallet",
    "/signup",
    "/login",
    "/lottery/wingo",
    "/forgetPassword",
    "/ForgetUserName",
    "/needhelp",
    "/downloadAPK",
    "/Notification",
    "/profitLoss",
    "/accountStatement",
    "/depositHistory",
    "/withdrawHistory",
    "/betHistory",
    "/PendingBets",
    "/changePassword",
    "/cuppon",
    "/RedeemBonus",
    "/affilation",
    "/affilationDashboard",
    "/Statistics",
    "/WithdrawAffilation",
    "/updateAccount",
    "/CryptoAdd",
    "/WinbhaiWallet",
    "/WhatsupWithdraw",
  ];
  const hideHeaderPaths = [
    "/cuppon",
    "/RedeemBonus",
    "/Bonus",
    "/Notification",
    "/Info",
    "/changePassword",
    "/downloadAPK",
    "/lottery/wingo",
    "/needhelp",
  
  ];

  const hideHeaderAll = [
    "/signup",
    "/login",
    "/forgetPassword",
    "/ForgetUserName",
  ];
  const shouldHideFooter = hideFooterPaths.includes(location.pathname);
  const shouldShowHeader2 = hideHeaderPaths.includes(location.pathname);
  const shouldHideHeader = hideHeaderAll.includes(location.pathname);
    const isWingoPath = location.pathname === "/lottery/wingo";
  return (
    <>
      {location.pathname === "/aviator" ? (
        <AvitatorLayout component={<AviatorHome />} />
      ) : location?.pathname === "/chickenRoadGame" ? (
        <ChickenRoadLayout component={<Game />} />
      ) : (
        <div
          className={`min-h-screen w-full ${
            isWingoPath ? "flex justify-center bg-grayBg" : "bg-grayBg"
          }`}
        >
          <div
            className={`flex flex-col min-h-screen hide-scrollbar
          w-full ${isWingoPath ? "xsm:w-[400px] bg-red2" : ""}`}
          >
            {/* {shouldShowHeader2 ? <Header2 /> : <Header />} */}
            {!shouldHideHeader &&
              (shouldShowHeader2 ? (
                <Header2 className="sticky top-0 z-50" />
              ) : (
                <Header className="sticky top-0 z-50" />
              ))}
            {/* <Header /> */}
            {children}
            {!shouldHideFooter && (
              <div className=" sticky bottom-0 z-40">
                <div className="md:hidden ">
                  {" "}
                  <Footer />
                </div>
                <div className="hidden md:block lg:hidden">
                  {" "}
                  <Footer2 />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}