import React, { useContext } from "react";
import {
  Box,
  Flex,
  Spacer,
  Heading,
  Link,
  Button,
  Image,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ApiContext } from "../ApiContext";

const AuthNav = () => {
  const { setLoggedIn, data } = useContext(ApiContext);
  console.log(data);
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex align="center">
        <Box mr={4}>
          <NavLink to="/" mr={4}>
            Home
          </NavLink>
        </Box>
        <NavLink to="/employee-list" mr={4}>
          Employee List
        </NavLink>
        <Spacer />
        <Box mr={4}>{data && data.email && <Box mr={4}>{data.email}</Box>}</Box>
        <Button
          colorScheme="whiteAlpha"
          onClick={() => {
            localStorage.removeItem("token");
            setLoggedIn(false);
          }}
        >
          LogOut
        </Button>
      </Flex>
    </Box>
  );
};

export default AuthNav;
