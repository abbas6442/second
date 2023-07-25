import {
  Avatar,
  Button,
  Center,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
        >
          <Heading textAlign={"center"}>SECOND APP</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"} />
          <Input
            placeholder="Name"
            type="text"
            required
            focusBorderColor={"purple.500"}
          />
          <Input
            placeholder="Email"
            type="email"
            required
            focusBorderColor={"purple.500"}
          />
          <Input
            placeholder="password"
            type="password"
            required
            focusBorderColor={"purple.500"}
          />

          <Button colorScheme="purple" type="submit">
            Sign Up
          </Button>
          <Text textAlign={"right"}>
            Already Signed Up?{" "}
            <Button variant={"link"} alignSelf={"center"} colorScheme="purple">
              <Link to={"/Login"}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
}

export default SignUp;
