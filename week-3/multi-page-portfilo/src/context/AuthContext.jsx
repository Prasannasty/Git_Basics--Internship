import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Optionally, check localStorage or other persistence here
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Simple login function (replace with real auth logic)
  const login = (email, password) => {
    // Example: Accept any non-empty email/password for demo
    return new Promise((resolve, reject) => {
      if (email && password) {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
        resolve();
      } else {
        reject(new Error("Invalid credentials"));
      }
    });
  };

  // Simple logout function
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for consuming the context easily
export const useAuth = () => {
  return useContext(AuthContext);
};
