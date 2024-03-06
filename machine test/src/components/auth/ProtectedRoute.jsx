import React, { useEffect } from "react";
import { Route, useNavigate, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element, isAuthenticated, ...rest }) => {
  const navigate = useNavigate();
  return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
