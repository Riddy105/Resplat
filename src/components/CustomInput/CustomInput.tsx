import { Flex, Input, Text } from "@chakra-ui/react";
import { InputProps } from "../../Interfaces/interface";

const CustomInput = (props: InputProps) => {
  const { label, type } = props;
  return (
    <Flex direction="column">
      <Text as="label" fontSize="16px" color="black.100" fontWeight="semibold">
        {label}
      </Text>
      <Input
        type={type ?? "number"}
        h="40px"
        bgColor="white.100"
        borderRadius="2px"
        sx={{
          ":focus": {
            border: "1px solid #FF8062",
            boxShadow: "0px 0px 0px 4px rgba(255, 126, 33, 0.2)",
          },
        }}
      ></Input>
    </Flex>
  );
};

export default CustomInput;

// Didn't bother to get rid of the border color chakra gave us out of the box cos it seems to help distinguish the inputs on the background, removing it will lead to poor visibility.
