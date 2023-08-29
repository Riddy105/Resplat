import React from "react";
import { Box, Image, Grid, GridItem, Flex, Text } from "@chakra-ui/react";
import { ResplatLogo } from "../../assets";
const Survey = () => {
  return (
    <Flex
      as="section"
      bgColor="cream.100"
      h="100vh"
      direction="column"
      pt={["30px", null, "100px"]}
      gap={["30px", null, "100px"]}
      alignItems="center"
    >
      <Image src={ResplatLogo} alt="Resplat Logo"></Image>
      <SurveyBox />
    </Flex>
  );
};

export default Survey;

const SurveyBox = () => {
  return (
    <Box as="section" width={["90%", null, "40%"]} mx="auto">
      <Text
        bgColor="brown.100"
        px="25px"
        py="16px"
        borderRadius="4px 4px 0 0"
        color="black.200"
        fontWeight="bold"
        fontSize="18px"
        textTransform="uppercase"
      >
        Criteria one
      </Text>
      <Box as="section" py="27px" px="28px" bgColor="white.200">
        <Flex alignItems="center">
          <Text as="span" color="brown.300">
            *
          </Text>
          <Text color="gray.100" fontWeight="semibold">
            Requirements
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
