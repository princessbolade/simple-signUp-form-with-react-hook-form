import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  FormControl,
  FormErrorMessage,
  Button,
  Input
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React from "react";
// import { FormLabel } from "@chakra-ui/theme/dist/declarations/src/components";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }
  return (
    <Box mx={"auto"} maxW={"1200px"}>
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign Up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy the best feautures.
            </Text>
          </Stack>
        </Stack>
      </Flex>
      <Flex align={"center"} justify={"center"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.name}>
            <label style={{ fontSize: "16px", marginRight: "8px" }}>
              Full Name{" "}
            </label>
            <Input
              placeholder="Enter your first name"
              type="text"
              border={"1px solid"}
              borderColor="blue.400"
              {...register("name", {
                required: "This is a required field",
                minLength: { value: 4, message: "Minimum length should be 4" }
              })}
            />
            <FormErrorMessage>{errors.name && errors.message}</FormErrorMessage>
            <label style={{ fontSize: "16px", marginRight: "8px" }}>
              Email Address{" "}
            </label>
            <Input
              placeholder="Enter your email address"
              type="email"
              border={"1px solid"}
              borderColor="blue.400"
              {...register("email", {
                required: "This is a required field",
                pattern: {
                  value: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                  message: "Please enter a valid email address"
                }
              })}
            />
            <FormErrorMessage>{errors.name && errors.message}</FormErrorMessage>
            <label style={{ fontSize: "16px", marginLeft: "10px" }}>
              Password
            </label>
            <Input
              placeholder="Please enter your password"
              type="text"
              ml={"5px"}
              border={"1px solid"}
              borderColor="blue.400"
              {...register("password", {
                required: "This is a required field",
                minLength: {
                  value: 8,
                  message: "Please enter a stronger password"
                }
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.message}{" "}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme={"blue"}
            isLoading={isSubmitting}
            type="submit"
          >
            Register
          </Button>
        </form>
      </Flex>
    </Box>
  );
};

export default SignUp;
