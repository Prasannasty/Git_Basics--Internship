import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Adjust import to your auth context

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Your auth state
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login and pass current path in redirect query
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(location.pathname)}`}
        replace
      />
    );
  }

  return children;
};

export default ProtectedRoute;
