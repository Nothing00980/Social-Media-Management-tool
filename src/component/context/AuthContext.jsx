import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status and load user data
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:2000/api/user", {
          credentials: "include", // Include cookies in the request
        });

        if (!response.ok) {
          throw new Error("Not authenticated");
        }

        const data = await response.json();
        if (data.user) {
          setUser(data.user); // Set user data if authenticated
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        setUser(null); // Reset user data if not authenticated
      } finally {
        setIsLoading(false); // Stop loading after checking auth
      }
    };

    checkAuth();
  }, []);

  // Logout function that clears session data
  const logout = async () => {
    try {
      // Make sure to log out from the backend
      await fetch("http://localhost:2000/api/auth/logout", {
        method: "POST",
        credentials: "include", // Keep session cookie for logout
      });

      // Optionally, clear cookies or session storage if used
      // localStorage.clear(); // Uncomment if you're using localStorage
      // sessionStorage.clear(); // Uncomment if you're using sessionStorage
      setUser(null);
      localStorage.removeItem("token"); // Clear user data in context
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook for consuming auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
