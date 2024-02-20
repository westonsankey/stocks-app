import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik } from "formik";

import { Link } from "react-router-dom";
import { TLoginForm } from "./LoginController";

type TLoginViewProps = {
  onSubmit: (values: TLoginForm) => void;
  invalidLogin: boolean;
};

export const LoginView: React.FC<TLoginViewProps> = ({
  onSubmit,
  invalidLogin,
}) => {
  return (
    <Flex w="100%" justifyContent="center" mt={10}>
      <Box
        borderRadius="10px"
        padding={10}
        boxShadow="1px 6px 45px -3px rgba(0,0,0,0.1)"
      >
        <Box mb={5}>
          <Box>
            <Text fontWeight="bold" fontSize="4xl">
              Login
            </Text>
          </Box>

          <Box mt={5}>
            <Text>Access your financial dashboard and see your portfolio!</Text>
          </Box>
        </Box>

        {invalidLogin && (
          <Box
            p="10px 15px"
            background="#fe4a4a54"
            borderRadius="5px"
            mb="20px"
          >
            Invalid email address or password.
          </Box>
        )}

        <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
          {() => (
            <Form>
              <Box>
                <Field name="email">
                  {(props: FieldProps<string>) => (
                    <FormControl>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        {...props.field}
                        id="email"
                        size="sm"
                        placeholder="Enter your email"
                      />
                    </FormControl>
                  )}
                </Field>
              </Box>

              <Box mt={10}>
                <Field name="password">
                  {(props: FieldProps<string>) => (
                    <FormControl>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        {...props.field}
                        id="password"
                        size="sm"
                        type="password"
                        placeholder="Enter your password"
                      />
                    </FormControl>
                  )}
                </Field>
                <Box mt={3} ml="5px">
                  <Link to="/forgot">
                    <Text fontSize="xs" fontWeight="bold" color="#2f2ff9">
                      Forgot password?
                    </Text>
                  </Link>
                </Box>
              </Box>

              <Box mt={10}>
                <Button
                  // colorScheme="primary"
                  w="100%"
                  type="submit"
                  bg="#2f2ff9"
                  _hover={{ bg: "#2626c7" }}
                  color="white"
                >
                  Login
                </Button>
              </Box>

              <Flex mt={5} justifyContent="center" gap={3}>
                <Text fontSize="sm">Not registered yet?</Text>
                <Link to="/register">
                  <Text fontWeight="bold" color="#2f2ff9" fontSize="sm">
                    Create an Account
                  </Text>
                </Link>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default LoginView;
