import React from "react";
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
import logo from "../assets/logo.jpg";
const Navbar = () => {
  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex align="center">
        <Heading size="md">
          <Image src={logo} width={46} alt="Dan Abramov" />
        </Heading>
        <Spacer />
        <Box mr={5}>
          <NavLink to="/">Home</NavLink>
        </Box>

        {/* <Box mr={5}>
          <NavLink to="/about" mr={4}>
            About
          </NavLink>
        </Box> */}

        <Button colorScheme="whiteAlpha" as={NavLink} to={"/login"}>
          Sign In
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
