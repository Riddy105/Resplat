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
        h="34px"
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
