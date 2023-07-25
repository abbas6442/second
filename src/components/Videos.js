import { Button, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const videoArr = [
  "https://media.istockphoto.com/id/1397640527/video/schaefler-altenalptuerme-mountain-ridge-swiss-alpstein-appenzell-innerrhoden-switzerland.mp4?s=mp4-640x640-is&k=20&c=B6m1yBpfqvy0XEtSNUKbur8y1XGenZXmehWc3Jy8wFw=",
  "https://media.istockphoto.com/id/1451869179/video/climber-in-the-mountains-achieved-his-goal-and-enjoys-wonderful-nature-man-stands-on-top-of.mp4?s=mp4-640x640-is&k=20&c=cMv0ozVK-ahHdeqOgqESW9OBI1s_ng1NEaURNIakKBM=",
  "https://media.istockphoto.com/id/1457937193/video/time-lapse-of-sunset-over-agricultural-field-in-sapa-of-north-vietnam.mp4?s=mp4-640x640-is&k=20&c=RB9YrhQb_HV1jMJO3QI5fy8AAz5gNhLKP94-NgB6hIE=",
  "https://media.istockphoto.com/id/1142846357/video/plum-flower-blooming-against-blue-background-in-a-time-lapse-movie-prunus-growing-in-time.mp4?s=mp4-640x640-is&k=20&c=DfYoDH4jdy6dyzQSwWbKJxYJ0C1jOY_Qc2f8IHoeFX8=",
  "https://media.istockphoto.com/id/1262249023/video/4k-time-lapse-blooming-flower-dahlia.mp4?s=mp4-640x640-is&k=20&c=hEFV-VY6E6USIEy_al1SYpzsg_R71rrX0bhharVYdDA=",
  "https://media.istockphoto.com/id/1319903165/video/people-hoeing-the-soil-hands-planting-green-seedling-community-gardening-urban-gardening.mp4?s=mp4-640x640-is&k=20&c=ZQd7nJ-KpUEjNq28kW6AcenxofLa1C0hCNyzw5PB8c8=",
  "https://media.istockphoto.com/id/1278324370/video/close-up-of-red-roses-in-bloom.mp4?s=mp4-640x640-is&k=20&c=YsEooZ1nTX7Om8kSl_8dEuc3KhBJ4GLZJ4YxxEZpSH8=",
  "https://media.istockphoto.com/id/1168431157/video/the-sun-casts-its-beautiful-rays-into-the-fresh-green-forest-time-lapse.mp4?s=mp4-640x640-is&k=20&c=ux2hbO3jjqcFmDWjT1OkFCT-aCcAaksZ-AQTwtZh-SY=",
  "https://media.istockphoto.com/id/1325079217/video/super-raindrops-falling-on-green-plant.mp4?s=mp4-640x640-is&k=20&c=A7Q9rbNkgLp0V0IHsYtJAsowQAlm6uu0lRotNax5okM=",
  "https://media.istockphoto.com/id/864526000/video/aerial-calm-surface-of-a-lake-in-the-forest-reflecting-the-beautiful-mount-hood-in-the.mp4?s=mp4-640x640-is&k=20&c=FEo1YeJ6ysV5vz62TCXehtl9Di8o0p0nWHPPXbdepFo=",
];

function Videos() {
  const [videoSrc, setVideoSrc] = useState(videoArr[0]);
  return (
    <Stack direction={["column", "row"]} h={"100vh"} pt={"10px"}>
      <VStack w={"full"}>
        <video
          src={videoSrc}
          controls
          autoPlay
          controlsList="nodownload"
          style={{ width: "100%" }}
        ></video>
        <VStack alignItems={"flex-start"} p={"8"} w={"full"} overflowX={"auto"}>
          <Heading>Sample video</Heading>
          <Text>This is a sample video for testing and demo</Text>
        </VStack>
      </VStack>
      <VStack
        w={["full", "xl"]}
        alignItems={"stretch"}
        p={"8"}
        spacing={"8"}
        overflowY={"auto"}
      >
        {videoArr.map((item, index) => (
          <Button
            variant={"ghost"}
            colorScheme="purple"
            onClick={() => setVideoSrc(item)}
          >
            Sample {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
}

export default Videos;
