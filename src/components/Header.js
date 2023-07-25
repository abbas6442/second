import React from "react";
import { useDisclosure, Button, Input, VStack, HStack } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        position={"fixed"}
        zIndex={"overlay"}
        colorScheme="purple"
        top={"4"}
        left={"4"}
        p={"0"}
        w={"10"}
        h={"10"}
        borderRadius={"full"}
        onClick={onOpen}
      >
        <BiMenuAltLeft />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>SECOND APP</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button onClick={onClose} colorScheme="purple" variant={"ghost"}>
                <Link to={"/"}>Home</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={"ghost"}>
                <Link to={"/videos"}>Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={"ghost"}>
                <Link to={"/videos?category=free"}>Free Videos</Link>
              </Button>
              <Button onClick={onClose} colorScheme="purple" variant={"ghost"}>
                <Link to={"/Upload"}>Upload Video</Link>
              </Button>
            </VStack>
            <HStack
              pos={"absolute"}
              bottom={"10"}
              left={"0"}
              top={["80%", "90%"]}
              w={"full"}
              justifyContent={"space-evenly"}
            >
              <Button onClick={onClose} colorScheme="purple">
                <Link to={"/Login"}>Log in</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme="purple"
                variant={"outline"}
              >
                <Link to>sign up</Link>
              </Button>
            </HStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
