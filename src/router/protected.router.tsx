import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const ProtectedRoute = (props: any) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");

    if (!userToken) {
      setIsLoggedIn(false);
      return navigate("/");
    } else {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <React.Fragment>
      {isLoggedIn
        ? props.children
        : notification.open({
            type: "error",
            message: "Error",
            description: "Please login",
          })}
    </React.Fragment>
  );
};

export default ProtectedRoute;
