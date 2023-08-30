import { Text } from "@chakra-ui/react";
import { Tagsprops } from "../../Interfaces/interface";
const Tags = (props: Tagsprops) => {
  const { title } = props;
  return (
    <Text
      bgColor="cream.100"
      borderRadius="50px"
      color="black.100"
      py="10px"
      px={["10px", null, "20px"]}
      fontWeight="bold"
    >
      {title}
    </Text>
  );
};

export default Tags;
