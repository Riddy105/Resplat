import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    white: {
      100: "#fff",
      200: "#FFFCF9",
    },
    cream: {
      100: "#FFEFE3",
    },
    brown: {
      100: "#FF9981",
      200: "#FF8062",
      300: "#FF6743",
    },
    black: {
      100: "#000",
      200: "#272A2E",
    },
    gray: {
      100: "#52575F",
    },
  },
});

export default theme;
