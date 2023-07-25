import { Box, Container, Heading, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Form } from "react-router-dom";
import img1 from "../Assests/img1.jpg";
import img2 from "../Assests/img2.jpg";
import img3 from "../Assests/img3.jpg";
import img4 from "../Assests/img4.jpg";
import img5 from "../Assests/img5.jpg";

import engineer from "../Assests/engineer.jpg";

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={3000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={"full"} h={["100%", "100vh"]}>
      <Img src={img1} h={["100%", '"800px"']} />
      <Heading bgColor={["none", "green"]} color={"white"} {...headingOptions}>
        Explore The Nature
      </Heading>
    </Box>
    <Box w="full" h={["100%", "100vh"]}>
      <Img src={img2} h={["100%", '"800px"']} />
      <Heading bgColor={["none", "green"]} color={"white"} {...headingOptions}>
        Explore The Nature
      </Heading>
    </Box>
    <Box w="full" h={["100%", "100vh"]}>
      <Img src={img3} h={["100%", '"800px"']} />
      <Heading bgColor={["none", "green"]} color={"white"} {...headingOptions}>
        Explore The Nature
      </Heading>
    </Box>
    <Box w="full" h={["100%", "100vh"]}>
      <Img src={img4} h={["100%", '"800px"']} />
      <Heading bgColor={["none", "green"]} color={"white"} {...headingOptions}>
        Explore The Nature
      </Heading>
    </Box>
    <Box w="full" h={["100%", "100vh"]}>
      <Img src={img5} h={["100%", '"800px"']} />
      <Heading bgColor={["none", "green"]} color={"white"} {...headingOptions}>
        Explore The Nature
      </Heading>
    </Box>
  </Carousel>
);

const headingOptions = {
  pos: "absolute",
  left: ["1%", "36%"],
  top: ["-8%", "90%"],
  transform: "translate(-50% -50%)",
  textTransform: "uppercase",
  p: "4",
  borderRadius: "15px",
};
function Home() {
  return (
    <Box>
      <MyCarousel />
      <Container maxWidth={"container.xl"} minH={"100vh"} p={"16"}>
        <Heading
          textTransform={"uppercase"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid"}
          margin={"auto"}
        >
          Services
        </Heading>
        <Stack
          h={"full"}
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Img src={engineer} borderRadius={"10px"} h={["40", "500"]} />
          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            laudantium numquam dignissimos consectetur unde incidunt sequi
            architecto iste eum vel ratione libero corrupti quia ipsa, saepe
            repellendus eligendi atque porro placeat voluptatum odio animi. Unde
            harum est animi inventore, optio ullam explicabo magni temporibus
            obcaecati, ex ratione facere atque distinctio aliquid quidem modi,
            earum minima aliquam? Cumque ad, explicabo beatae velit commodi
            quasi consequatur sit voluptates obcaecati reiciendis aliquam,
            sapiente ipsam magnam culpa mollitia modi voluptate nulla ullam
            blanditiis, suscipit optio unde incidunt. Tenetur quas libero,
            doloribus atque vero blanditiis officiis quis amet praesentium quod
            molestiae. Omnis reprehenderit totam commodi.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;
