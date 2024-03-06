import React, { useState } from "react";
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

const UpdateEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    gender: "",
    courses: [],
    img: null,
  });
  const { fetchData } = useContext(ApiContext);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(type);
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
    fetchData("put", formData, "employees");
  };

  return (
    <>
      <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
        <Heading mb={4} size={"md"} fontSize={"23"}>
          Update Employee
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </FormControl>
          <FormControl id="mobile" mb={4}>
            <FormLabel>Mobile No</FormLabel>
            <Input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
            />
          </FormControl>
          <FormControl id="designation" mb={4}>
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
          <FormControl id="gender" mb={4}>
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
          <FormControl id="courses" mb={4}>
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
            Update Employee
          </Button>
        </form>
      </Box>
    </>
  );
};

export default UpdateEmployee;
