import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";
import ApolloController from "./components/Auth/ApolloController";
import AuthProvider from "./components/Auth/AuthProvider";

import { AppRoutes } from "./Routes";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <ApolloController>
            <AppRoutes />
          </ApolloController>
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
