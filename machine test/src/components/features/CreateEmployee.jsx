import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  Select,
  Button,
  Heading,
} from "@chakra-ui/react";
import { ApiContext } from "../ApiContext";
import { useNavigate } from "react-router-dom";
const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    courses: [],
    img: null,
  });
  const { addEmployee,setCloseModal } = useContext(ApiContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedCourses = checked
        ? [...formData.courses, value]
        : formData.courses.filter((course) => course !== value);
      setFormData({ ...formData, courses: updatedCourses });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const RadioCheck = (e) => {
    setFormData({ ...formData, gender: e });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, img: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform your submit logic, e.g., make an API call
    console.log("Form submitted with:", formData);
    addEmployee(formData);
    setCloseModal(true);
  };

  return (
    <>
      <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
        <Heading mb={4} size={"md"}>
          Create Employee
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl name="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </FormControl>
          <FormControl name="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </FormControl>
          <FormControl name="mobile" mb={4}>
            <FormLabel>Mobile No</FormLabel>
            <Input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
            />
          </FormControl>
          <FormControl name="designation" mb={4}>
            <FormLabel>Designation</FormLabel>
            <Select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder="Select designation"
            >
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </Select>
          </FormControl>
          <FormControl name="gender" mb={4}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={RadioCheck}
            >
              <Stack direction="row">
                <Radio value="male" colorScheme="blue">
                  Male
                </Radio>
                <Radio value="female">Female</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
          <FormControl name="courses" mb={4}>
            <FormLabel>Courses</FormLabel>
            <Checkbox name="mca" value="MCA" onChange={handleChange}>
              MCA
            </Checkbox>
            <Checkbox name="bca" value="BCA" onChange={handleChange}>
              BCA
            </Checkbox>
            <Checkbox name="bsc" value="BSC" onChange={handleChange}>
              BSC
            </Checkbox>
          </FormControl>
          <FormControl id="img" mb={4}>
            <FormLabel>Image Upload</FormLabel>
            <Input type="file" onChange={handleImageChange} />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default CreateEmployee;
