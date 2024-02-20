import { Flex, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useAuth } from "../../hooks/useAuth";
import styles from "./NavBar.module.scss";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useMutation } from "@apollo/client";
import {
  LogoutDocument,
  LogoutMutation,
} from "../../graphql/generated/graphql";

const UserMenu: React.FC = () => {
  const { auth, setAuth } = useAuth();
  const [logout] = useMutation<LogoutMutation>(LogoutDocument);

  const handleLogout = async () => {
    setAuth({});
    await logout();
  };

  return (
    <Menu>
      <MenuButton
        className={styles.adminButton}
        as={Button}
        variant="link"
        color="white"
        _hover={{ bg: "#684FFF" }}
        _active={{ bg: "#684FFF" }}
        rightIcon={<ChevronDownIcon />}
      >
        {auth.username}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export const NavBar = () => {
  return (
    <Flex w="100%" h="50px" background="#684FFF">
      <Flex ml="35px" w="50%" h="100%" alignItems="center">
        <Text
          className={styles.navLink}
          color="#FFF"
          fontSize="medium"
          fontWeight="bold"
        >
          Dashboard
        </Text>
      </Flex>

      <Flex mr="35px" w="50%" justifyContent="flex-end" alignItems="center">
        <UserMenu />
      </Flex>
    </Flex>
  );
};
