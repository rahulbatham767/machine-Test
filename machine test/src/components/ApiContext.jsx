import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Create the API context
const ApiContext = createContext();

// Custom hook to access the API context
export const useApi = () => {
  return useContext(ApiContext);
};

// Create the API provider component
const ApiProvider = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [closeModal, setCloseModal] = useState(false);
  var host = "http://localhost:8080/api/v1/";

  // Function to make API requests using Axios
  const fetchData = async (method, requestData, url) => {
    console.log(requestData, url);
    try {
      setLoading(true);
      setError(null);
      const response = await axios({
        method: method,
        url: host + url,
        data: requestData,
      });
      setData(response.data);
      console.log(response.data.token);
      if (response.data.token) {
        setLoggedIn(true);
      }
      localStorage.setItem("token", JSON.stringify(response.data));
      navigate("/");
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  const showEmployee = async () => {
    const response = await axios({
      method: "get",
      url: host + "employees",
    });
    setEmployees(response.data);
    return response.data;
  };
  const addEmployee = async (formData) => {
    console.log(formData);
    const response = await axios({
      method: "post",
      url: host + "employees",
      data: formData,
    });

    return response.data;
  };
  const deleteEmployee = async (id) => {
    const response = await axios({
      method: "delete",
      url: host + "employees/" + id,
    });
    return response.data;
  };

  return (
    <ApiContext.Provider
      value={{
        deleteEmployee,
        data,
        setCloseModal,
        closeModal,
        loading,
        addEmployee,
        error,
        employees,
        showEmployee,
        fetchData,
        setLoggedIn,
        loggedIn,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export { ApiProvider, ApiContext };
