import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, Image, Grid, Flex, Text } from "@chakra-ui/react";
import { ResplatLogo } from "../../assets";
import SURVEY_DATA from "../../SurveyData/SurveyData";
import { CustomInput, ProgressButtons, Tags } from "../../components";
const Survey = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    searchParams.set("tab", "1");
    setSearchParams(searchParams);
  }, []);
  return (
    <Flex
      as="section"
      bgColor="cream.100"
      h="fit-content"
      direction="column"
      pt={["30px", null, "100px"]}
      pb="100px"
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
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = Number(searchParams.get("tab"));
  const totalTabs = Object.values(SURVEY_DATA).length;
  const surveyIndex = currentTab - 1; // If currentTab = 1, then the index = 0. So that tab 1 gets its correct data from the object. Data for Tab 1 will reside in index 0 of the array, hence {currentTab -1}

  const currentCriteria =
    Object.keys(SURVEY_DATA)[surveyIndex < 0 ? 0 : surveyIndex];
  const CURRENT_SURVEY =
    Object.values(SURVEY_DATA)[surveyIndex < 0 ? 0 : surveyIndex]; // Initially on page load, currentTab will be null, that will make surveyIndex = -1 hence an invalid value to provide to an array.
  const { requirements: REQUIREMENTS, inputs: INPUTS } = CURRENT_SURVEY;
  const goToNextTab = () => {
    const nextTab = currentTab + 1;
    searchParams.set("tab", nextTab.toString());
    setSearchParams(searchParams);
  };
  return (
    <Box
      as="section"
      width={["90%", null, null, "50%"]}
      mx="auto"
      maxW="620px"
      boxShadow="0px 4px 100px 0px rgba(214, 206, 197, 0.28)"
      borderRadius="4px"
    >
      <Text
        bgColor="brown.100"
        px="25px"
        py="16px"
        // borderRadius="4px 4px 0 0"
        color="black.200"
        fontWeight="bold"
        fontSize="18px"
        textTransform="uppercase"
      >
        {`Criteria ${currentCriteria}`}
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
        <Flex gap="6px" mb="36px" mt="5px" wrap="wrap">
          {REQUIREMENTS.map((req, i) => (
            <Tags key={i} title={req} />
          ))}
        </Flex>
        <Grid
          templateColumns={["1fr", null, "1fr 1fr"]}
          gap="27px 34px"
          mb="78px"
        >
          {INPUTS.map((input, i) => (
            <CustomInput key={i} label={input} />
          ))}
        </Grid>
        <ProgressButtons
          goToNext={goToNextTab}
          currentTab={currentTab}
          totalTabs={totalTabs}
        />
      </Box>
    </Box>
  );
};
