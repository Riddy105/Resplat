import {
  Flex,
  CircularProgress,
  CircularProgressLabel,
  Button,
} from "@chakra-ui/react";
import { ProgressButtonsProps } from "../../Interfaces/interface";

const ProgressButtons = (props: ProgressButtonsProps) => {
  const { totalTabs, currentTab, goToNext } = props;
  console.log(currentTab, totalTabs);
  const value = (currentTab / totalTabs) * 100;
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <CircularProgress value={value} color="brown.200" size="70px">
        <CircularProgressLabel>{`${currentTab}/${totalTabs}`}</CircularProgressLabel>
      </CircularProgress>
      <Button
        isDisabled={currentTab === totalTabs}
        bgColor="blue.100"
        py="5px"
        px="24px"
        color="white.100"
        fontWeight="700"
        boxShadow=" 0px 5px 8px 0px rgba(0, 0, 0, 0.08)"
        onClick={goToNext}
        sx={{
          ":hover": { bgColor: "blue.200" },
        }}
      >
        GO
      </Button>
    </Flex>
  );
};

export default ProgressButtons;
