import React from "react";
import { Heading, Center } from "@chakra-ui/react";
const Dashboard = () => {
  return (
    <div>
      <Heading size="md" as={"h1"} fontSize={30} mt={5}>
        Dashboard
      </Heading>
      <Center>Welcome To Admin Panel</Center>
    </div>
  );
};

export default Dashboard;
