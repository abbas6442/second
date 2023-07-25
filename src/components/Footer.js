import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AiOutlineSend,
  AiFillFacebook,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillTwitterCircle,
} from "react-icons/ai/";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w={"full"} px={"4"}>
          <Heading size={"md"} textTransform={"uppercase"} textAlign={"center"}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={"2px solid white"} py={"2"}>
            <Input
              placeholder="Enter Email Here..."
              border={"none"}
              borderRadius={"none"}
              outline={"none"}
              focusBorderColor="none"
            />
            <Button
              p={"0"}
              color={"purple"}
              variant={"ghost"}
              borderRadius={"0px 20px 20px 0px"}
            >
              <AiOutlineSend />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={"full"}
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
          <Heading textTransform={"uppercase"} textAlign={"center"}>
            second app
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>

        <VStack w={"full"}>
          <Heading textAlign={"center"} size={"md"} textTransform={"uppercase"}>
            Social Media
          </Heading>
          <HStack pt={"15px"}>
            <Button>
              <AiFillYoutube size={"xs"} />
            </Button>
            <Button size={"md"}>
              <FaFacebookSquare />
            </Button>

            <Button>
              <AiFillTwitterCircle size={"md"} />
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
