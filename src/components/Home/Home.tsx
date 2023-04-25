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

type PropTypes = {
  galleryRef: React.RefObject<HTMLInputElement>;
  locationRef: React.RefObject<HTMLInputElement>;
};
export default function Home({ galleryRef, locationRef }: PropTypes) {
  return (
    <Flex
      marginY={{ base: "20px", md: "60px" }}
      align={"center"}
      flexDir={"column"}
    >
      <Flex
        maxWidth={"1000px"}
        flexDir={{ base: "column", md: "row" }}
        justify="center"
        align={{ base: "center", md: "start" }}
      >
        <Box
          ml={{ md: "30px" }}
          className="frame"
          transform={{ md: "rotate(-10deg)" }}
          p={{ base: "10px", md: "15px" }}
          w="max-content"
        >
          <Image
            w={{ base: "200px", md: "400px" }}
            src={storeFront}
            alt="Toms flowers storefront"
          />
        </Box>
        <Box
          // minW={{ md: "500px" }}
          ml={{ md: "40px" }}
          mt={{ base: "15px", md: "0" }}
          px={{ base: "10px", md: "0" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontSize={{ base: "3xl", md: "4xl" }}
            lineHeight={{ base: "35px", md: "auto" }}
          >
            Your community garden center
          </Text>
          <Box ml="10px" mt="10px">
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
      <Flex
        maxWidth={"1000px"}
        flexDir={{ base: "column-reverse", md: "row" }}
        justify="center"
        align={"center"}
        mt={{ base: "30px", md: "30px" }}
      >
        <Box
          ml={{ md: "40px" }}
          mt={{ base: "15px", md: "0" }}
          px={{ base: "10px", md: "0" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text fontSize={{ base: "3xl", md: "4xl" }}>
            Not just a flower shop
          </Text>
          <Box ml="10px" mt="10px">
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
        <Box
          className="frame"
          transform={{ md: "rotate(10deg)" }}
          p={{ base: "10px", md: "15px" }}
          mr={{ md: "30px" }}
          ml={{ base: "10px", lg: "20px" }}
          w="max-content"
        >
          <Image
            maxWidth={{ base: "300px", lg: "400px" }}
            src={gardenPlants}
            alt="Garden plants"
          />
        </Box>
      </Flex>
      <Flex
        flexDir={"column"}
        mb="40px"
        ref={locationRef}
        w="100%"
        maxW={"1000px"}
        mt={{ base: "30px", md: "80px" }}
        px={{ base: "20px", md: "0" }}
      >
        <Text textAlign={"center"} fontSize={{ base: "3xl", md: "4xl" }}>
          Location & Hours
        </Text>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          justify="space-around"
          mt={{ base: "10px", md: "30px" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Flex
            flexDir={{ base: "column", md: "column" }}
            justify="space-around"
          >
            <Flex flexDir={"column"}>
              <Text fontSize={"2xl"}>Hours of Operation</Text>
              <Text fontWeight={"bold"}>Monday - Saturday</Text>
              <Text>9:30 AM : 6:00 PM</Text>
              <Text fontWeight={"bold"}>Sunday</Text>
              <Text>9:30 AM : 3:00 PM</Text>
            </Flex>
            <br />
            <Flex flexDir={"column"}>
              <Text fontSize={"2xl"}>Location</Text>
              <Text>1863 Eglinton Ave W</Text>
              <Text>York, ON</Text>
              <Text>M6E 3X2</Text>
            </Flex>
          </Flex>
          <Box
            w={{ base: "100%", md: "400px" }}
            h={{ base: "250px", md: "300px" }}
            mt={{ base: "15px", md: "0" }}
          >
            <iframe
              title={"Toms Flowers Location"}
              width="100%"
              height="100%"
              style={{ border: "0" }}
              loading="lazy"
              src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpRHGqO0zK4gR4P-QURCgnw0&key=${process.env.REACT_APP_GMAPS_KEY}`}
            ></iframe>
          </Box>
        </Flex>
      </Flex>
      <Box
        mt={{ md: "20px" }}
        maxW="600px"
        px={{ base: "20px", md: "0" }}
        textAlign={{ base: "center", md: "left" }}
      >
        Contact us by phone at&nbsp;
        <span style={{ fontWeight: "bold" }}>(416) 939-9279</span> or come by
        and see us with any questions, comments, or special requests. Whether
        you need help selecting the perfect bouquet or have questions about
        caring for your houseplants, we'll be happy to assist you!
      </Box>
      <Flex
        mt={{ base: "30px", md: "40px" }}
        flexDir={"column"}
        mb="40px"
        ref={galleryRef}
        align={"center"}
        w="100%"
        maxW={"1000px"}
      >
        <Text textAlign={"center"} fontSize={{ base: "3xl", md: "4xl" }}>
          Gallery
        </Text>
        <Flex flexWrap={"wrap"} justify="center">
          {imgArr.map((img) => {
            return (
              <Box
                w={{ base: "150px", md: "250px" }}
                h={{ base: "150px", md: "250px" }}
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
    </Flex>
  );
}
