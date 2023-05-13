import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { sanctumUser } from "../../services/UserService";

const Auth = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  useEffect(() => {
    const usi = async () => {
      const response = await sanctumUser().catch((error) => {
        setIsLoggedIn(false);
      });
      if (response?.statusText === "OK") {
        setIsLoggedIn(true);
      }
    };
    usi();
  }, []);

  if (isLoggedIn === undefined) {
    return null;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default Auth;
