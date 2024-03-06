import { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import AuthNav from "./components/auth/AuthNav";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import CreateEmployee from "./components/features/CreateEmployee";
import EmployeeList from "./components/features/EmployeeList";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { ApiContext } from "./components/ApiContext";

function App() {
  const { loggedIn, setLoggedIn } = useContext(ApiContext);

  const Nav = () => {
    return loggedIn ? <AuthNav /> : <Navbar />;
  };
  useEffect(() => {
    setLoggedIn(localStorage.getItem("token"));
  }, []);
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/login" element={<SignIn />} />
        <Route
          exact
          path="/"
          element={
            <ProtectedRoute element={Dashboard} isAuthenticated={loggedIn} />
          }
        />
        <Route
          exact
          path="/create-employee"
          element={
            <ProtectedRoute
              element={CreateEmployee}
              isAuthenticated={loggedIn}
            />
          }
        />
        <Route
          exact
          path="/employee-list"
          element={
            <ProtectedRoute element={EmployeeList} isAuthenticated={loggedIn} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
