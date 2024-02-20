import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../styles/theme";
import { DashboardView } from "../Dashboard/DashboardView";
import { NavBar } from "../NavBar";

function Layout() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <DashboardView />
    </ChakraProvider>
  );
}

export default Layout;
