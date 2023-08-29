import React from "react";
import { Text } from "@chakra-ui/react";
import { Tagsprops } from "../../Interfaces/interface";
const Tags = (props: Tagsprops) => {
  const { title } = props;
  return (
    <Text
      bgColor="cream.100"
      borderRadius="50px"
      color="black.100"
      py="20px"
      px="20px"
    >
      {title}
    </Text>
  );
};

export default Tags;
