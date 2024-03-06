import React, { useContext, useEffect, memo } from "react";
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Image,
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import CreateEmployee from "./CreateEmployee";
import UpdateEmployeeModal from "./UpdateEmployeeModal";
import { ApiContext } from "../ApiContext";

const CreateEmployeeModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <CreateEmployee />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const EmployeeList = () => {
  const { fetchData, loggedIn, employees, showEmployee, deleteEmployee } =
    useContext(ApiContext);

  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure();
  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose,
  } = useDisclosure();

  const handleUpdate = () => {
    onUpdateOpen();
  };

  const handleCreate = () => {
    onCreateOpen();
  };
  useEffect(() => {
    showEmployee();
  }, []);
  return (
    <>
      <Heading>Employee List</Heading>
      <Box display={"flex"} alignItems={"center"} justifyContent={"flex-end"}>
        <Heading size={"sm"} mr={3}>
          Total Count: {employees.length}
        </Heading>
        <Button size={"sm"} mr={3} onClick={handleCreate}>
          Create Employee
        </Button>
      </Box>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th border="1px solid" borderBottom="2px solid">
              ID
            </Th>
            <Th border="1px solid" borderBottom="2px solid">
              Image
            </Th>
            <Th border="1px solid" borderBottom="2px solid">
              Name
            </Th>
            <Th border="1px solid" borderBottom="2px solid">
              Email
            </Th>
            <Th border="1px solid" borderBottom="2px solid">
              Mobile No
            </Th>
            <Th border="1px solid" borderBottom="2px solid">
              Designation
            </Th>
            <Th border="1px solid" borderBottom="2px solid">
              Courses
            </Th>
            <Th border="1px solid" borderBottom="2px solid">
              Create Date
            </Th>
            <Th border="1px solid" borderBottom="2px solid">
              Action
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee, id) => (
            <EmployeeRow
              key={id}
              id={id}
              employee={employee}
              handleUpdate={handleUpdate}
              deleteEmployee={deleteEmployee}
            />
          ))}
        </Tbody>
      </Table>
      <CreateEmployeeModal isOpen={isCreateOpen} onClose={onCreateClose} />
      <UpdateEmployeeModal isOpen={isUpdateOpen} onClose={onUpdateClose} />{" "}
    </>
  );
};

const EmployeeRow = memo(({ id, employee, handleUpdate, deleteEmployee }) => {
  return (
    <Tr>
      <Td>{id + 1}</Td>
      <Td>
        <Box w="50px" h="50px">
          <Image src={employee.image} alt={employee.name} />
        </Box>
      </Td>
      <Td>{employee.name}</Td>
      <Td>{employee.email}</Td>
      <Td>{employee.mobile}</Td>
      <Td>{employee.designation}</Td>
      <Td>{employee.course}</Td>
      <Td>{employee.date}</Td>
      <Td>
        <IconButton
          aria-label="Edit"
          icon={<EditIcon />}
          mr={2}
          colorScheme="blue"
          variant="outline"
          onClick={handleUpdate}
        />
        <IconButton
          aria-label="Delete"
          icon={<DeleteIcon />}
          colorScheme="red"
          onClick={() => deleteEmployee(employee._id)}
          variant="outline"
        />
      </Td>
    </Tr>
  );
});

export default EmployeeList;
