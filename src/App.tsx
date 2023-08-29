import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "./Theme/theme";

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>;
    </ChakraBaseProvider>
  );
}

export default App;
