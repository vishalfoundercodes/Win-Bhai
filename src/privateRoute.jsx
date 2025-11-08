// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ element }) => {
//   const isAuthenticated = () => {
//     // Check if userId exists in localStorage
//     return localStorage.getItem("userId") !== null;
//   };

//   return isAuthenticated() ? element : <Navigate to="/" />;
// };

// export default PrivateRoute;

// PrivateRoute.jsx
// import { Navigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useRef } from "react";

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = !!localStorage.getItem("userId");
//   const toastShown = useRef(false); // 👈 prevent multiple toast calls

//   if (!isAuthenticated) {
//     if (!toastShown.current) {
//       toastShown.current = true;
//       toast.warning("⚠️ Please login first!");
//     }
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };

// export default PrivateRoute;

import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

// 👇 Global flag to prevent multiple toasts
let toastShown = false;

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("userId");

  if (!isAuthenticated) {
    if (!toastShown) {
      toastShown = true;
      toast.warning("⚠️ Please login first!");
      // reset flag after 2 seconds so it can show again later if needed
      setTimeout(() => {
        toastShown = false;
      }, 2000);
    }
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;



