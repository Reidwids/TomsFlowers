import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./Home.scss";
import storeFront from "../../assets/images/TomsFlowers1.jpg";
import gardenPlants from "../../assets/images/TomsFlowers2.png";
import img3 from "../../assets/images/tomsflowers3.png";
import img4 from "../../assets/images/tomsflowers4.png";
import img5 from "../../assets/images/tomsflowers5.png";
import img6 from "../../assets/images/tomsflowers6.png";
import img8 from "../../assets/images/tomsflowers8.png";
import img9 from "../../assets/images/tomsflowers9.png";
import img10 from "../../assets/images/tomsflowers10.png";
import img11 from "../../assets/images/tomsflowers11.png";
import img12 from "../../assets/images/tomsflowers12.png";
import img13 from "../../assets/images/tomsflowers13.png";
import img14 from "../../assets/images/tomsflowers14.png";

const imgArr = [
  img3,
  img4,
  img5,
  img6,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];

export default function Home() {
  return (
    <Flex marginY={"60px"} align={"center"} flexDir="column">
      <Flex maxWidth={"1000px"} flexDir={"row"} justify="center">
        <div
          className="frame"
          style={{
            transform: "rotate(-10deg)",
          }}
        >
          <Image
            width={{ sm: "200px", lg: "400px" }}
            src={storeFront}
            alt="Toms flowers storefront"
          />
        </div>
        <Box minW="500px" ml="40px">
          <Text fontSize={"4xl"}>Your community garden center</Text>
          <Box ml="10px">
            <Text>
              At Tom's Flowers and Gifts, we pride ourselves on being a small,
              family-owned business that puts our heart and soul into every
              arrangement.
            </Text>
            <Text mt="10px">
              We understand the language of flowers and can help you choose the
              perfect arrangement to express your feelings.
            </Text>
            <Text mt="10px">
              From classic roses to exotic orchids, we offer a wide variety of
              blooms to suit any occasion and personal taste.
            </Text>
          </Box>
        </Box>
      </Flex>
      <Flex maxWidth={"1000px"} flexDir={"row"} mt="60px">
        <Box minW="500px" mr="40px">
          <Text fontSize={"4xl"}>Not just a flower shop</Text>
          <Box ml="10px">
            <Text>
              We're not only a flower shop - we're a one-stop-shop for all your
              gardening needs.
            </Text>
            <Text mt="10px">
              Explore our collection of beautiful houseplants and garden plants,
              perfect for adding a touch of greenery to your home or outdoor
              space.
            </Text>
          </Box>
        </Box>
        <div
          className="frame"
          style={{
            transform: "rotate(10deg)",
          }}
        >
          <Image
            width={{ sm: "400px", lg: "800px" }}
            src={gardenPlants}
            alt="Garden plants"
          />
        </div>
      </Flex>
      <a
        href="#LocationHours"
        style={{ cursor: "default", width: "100%", maxWidth: "1000px" }}
      >
        <Flex mt="80px" flexDir={"column"} mb="40px">
          <Text textAlign={"center"} fontSize="4xl">
            Location & Hours
          </Text>
          <Flex flexDir={"row"} justify="space-around" mt="30px">
            <Flex flexDir={"column"}>
              <Flex flexDir={"column"}>
                <Text fontSize={"2xl"}>Location</Text>
                <Text>1863 Eglinton Ave W</Text>
                <Text>York, ON</Text>
                <Text>M6E 3X2</Text>
              </Flex>
              <br />
              <Flex flexDir={"column"}>
                <Text fontSize={"2xl"}>Hours of Operation</Text>
                <Text fontWeight={"bold"}>Monday - Saturday</Text>
                <Text>9:30 AM : 6:00 PM</Text>
                <Text fontWeight={"bold"}>Sunday</Text>
                <Text>9:30 AM : 3:00 PM</Text>
              </Flex>
            </Flex>
            <iframe
              title={"Toms Flowers Location"}
              width="400px"
              height="300px"
              style={{ border: "0" }}
              loading="lazy"
              src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpRHGqO0zK4gR4P-QURCgnw0&key=${process.env.REACT_APP_GMAPS_KEY}`}
            ></iframe>
          </Flex>
        </Flex>
      </a>
      <a
        href="#LocationHours"
        style={{ cursor: "default", width: "100%", maxWidth: "1000px" }}
      >
        <Flex mt="40px" flexDir={"column"} mb="40px" align={"center"}>
          <Text textAlign={"center"} fontSize="4xl">
            Gallery
          </Text>
          <Flex flexWrap={"wrap"} justify="center">
            {imgArr.map((img) => {
              return (
                <Box
                  w="250px"
                  h="250px"
                  m="10px"
                  borderRadius={"10px"}
                  bgImage={img}
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize={"cover"}
                  objectFit={"none"}
                ></Box>
              );
            })}
          </Flex>
        </Flex>
      </a>
    </Flex>
  );
}
