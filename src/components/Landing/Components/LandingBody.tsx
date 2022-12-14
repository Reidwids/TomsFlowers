import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion, useAnimation } from "framer-motion";
import { theme } from "../../../App";
import "./LandingBody.scss";
type PropTypes = {
  isDesktop: boolean;
};

export default function LandingBody({ isDesktop }: PropTypes) {
  const navigate = useNavigate();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex h="100vh" bgColor="white" w="100%" justify={"center"}>
      <Box maxW={"1200px"} w="100%" color="flowerPink">
        <motion.div
          style={{ width: "100%" }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 3.5,
              duration: 3,
              ease: [0.87, 0, 0.13, 1],
            },
          }}
        >
          {isDesktop ? (
            <Flex
              h={isDesktop ? "100px" : "60px"}
              justify="space-between"
              align="center"
              m="0 30px"
            >
              <Text
                _hover={{
                  fontWeight: "600",
                }}
                className="hover-underline-animation"
                onClick={() => navigate("#About")}
              >
                About
              </Text>
              <Text
                _hover={{
                  fontWeight: "600",
                }}
                className="hover-underline-animation"
                onClick={() => navigate("#LocationHours")}
              >
                Location & Hours
              </Text>
            </Flex>
          ) : (
            <>
              <Flex
                h={isDesktop ? "100px" : "60px"}
                justify="space-between"
                align="center"
                m="0 10px"
                zIndex={3}
              >
                <IconButton
                  onClick={onToggle}
                  cursor={"pointer"}
                  color="flowerPink"
                  zIndex={3}
                  icon={
                    isOpen ? (
                      <CloseIcon w={3} h={3} />
                    ) : (
                      <HamburgerIcon w={5} h={5} />
                    )
                  }
                  variant={"ghost"}
                  aria-label={"Toggle Navigation"}
                />
              </Flex>
              <Collapse in={isOpen} animateOpacity>
                <Stack
                  p={"10px 30px"}
                  display={isDesktop ? "none" : "block"}
                  bg="white"
                >
                  <Stack spacing={3} onClick={onToggle}>
                    <Flex
                      py={2}
                      zIndex={3}
                      onClick={() => navigate("#About")}
                      cursor={"pointer"}
                      justify={"space-between"}
                      align={"center"}
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      <Text fontWeight={600}>About</Text>
                    </Flex>
                    <hr color={theme.colors.flowerPink} />
                    <Flex
                      py={2}
                      cursor={"pointer"}
                      zIndex={3}
                      onClick={() => navigate("#LocationHours")}
                      justify={"space-between"}
                      align={"center"}
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      <Text fontWeight={600}>Location & Hours</Text>
                    </Flex>
                  </Stack>
                </Stack>
              </Collapse>
            </>
          )}
        </motion.div>
      </Box>
    </Flex>
  );
}
