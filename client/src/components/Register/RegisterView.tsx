import { Box } from "@chakra-ui/layout";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik } from "formik";
import { TRegisterForm } from "./RegisterController";
import * as Yup from "yup";

type TRegisterViewProps = {
  onSubmit: (values: TRegisterForm) => void;
};

export const RegisterView: React.FC<TRegisterViewProps> = ({
  onSubmit,
}: TRegisterViewProps) => {
  const initialValues: TRegisterForm = {
    email: "",
    password: "",
    repeatPassword: "",
    yahooFinanceApiKey: "",
  };

  return (
    <Flex w="100%" justifyContent="center" mt={10}>
      <Box
        borderRadius="10px"
        padding={10}
        boxShadow="1px 6px 45px -3px rgba(0,0,0,0.1)"
      >
        <Box mb={10}>
          <Box>
            <Text fontWeight="bold" fontSize="4xl">
              Register
            </Text>
          </Box>

          <Box mt={5}>
            <Text>Access your financial dashboard and see your portfolio!</Text>
          </Box>
        </Box>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={Yup.object({
            email: Yup.string().required("Email is required"),
            password: Yup.string().required("Password is required"),
            repeatPassword: Yup.string().oneOf(
              [Yup.ref("password"), null],
              "Passwords must match"
            ),
            yahooFinanceApiKey: Yup.string().required("API key is required"),
          })}
        >
          {({ errors, touched }) => (
            <Form>
              <Box>
                <Field name="email">
                  {(props: FieldProps<string>) => (
                    <FormControl isInvalid={touched.email && !!errors.email}>
                      <FormLabel htmlFor="email">Email Address</FormLabel>
                      <Input
                        {...props.field}
                        id="email"
                        size="sm"
                        placeholder="Enter your email"
                        type="email"
                      />
                      {touched.email && errors.email && (
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      )}
                    </FormControl>
                  )}
                </Field>
              </Box>

              <Box mt={10}>
                <Field name="password">
                  {(props: FieldProps<string>) => (
                    <FormControl
                      isInvalid={touched.password && !!errors.password}
                    >
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        {...props.field}
                        id="password"
                        size="sm"
                        type="password"
                        placeholder="Enter your password"
                      />
                      {touched.password && errors.password && (
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      )}
                    </FormControl>
                  )}
                </Field>
              </Box>

              <Box mt={10}>
                <Field name="repeatPassword">
                  {(props: FieldProps<string>) => (
                    <FormControl
                      isInvalid={
                        touched.repeatPassword && !!errors.repeatPassword
                      }
                    >
                      <FormLabel htmlFor="repeatPassword">
                        Confirm Password
                      </FormLabel>
                      <Input
                        {...props.field}
                        id="repeatPassword"
                        size="sm"
                        type="password"
                        placeholder="Confirm your password"
                      />
                      {touched.repeatPassword && errors.repeatPassword && (
                        <FormErrorMessage>
                          {errors.repeatPassword}
                        </FormErrorMessage>
                      )}
                    </FormControl>
                  )}
                </Field>
              </Box>

              <Box mt={10}>
                <Field name="yahooFinanceApiKey">
                  {(props: FieldProps<string>) => (
                    <FormControl
                      isInvalid={
                        touched.yahooFinanceApiKey &&
                        !!errors.yahooFinanceApiKey
                      }
                    >
                      <FormLabel htmlFor="yahooFinanceApiKey">
                        Yahoo Finance API Key
                      </FormLabel>
                      <Input
                        {...props.field}
                        id="yahooFinanceApiKey"
                        size="sm"
                        placeholder="Enter your API key"
                      />
                      {touched.yahooFinanceApiKey &&
                        errors.yahooFinanceApiKey && (
                          <FormErrorMessage>
                            {errors.yahooFinanceApiKey}
                          </FormErrorMessage>
                        )}
                    </FormControl>
                  )}
                </Field>
              </Box>

              <Box mt={10}>
                <Button
                  w="100%"
                  type="submit"
                  background="#2f2ff9"
                  _hover={{ bg: "#2626c7" }}
                  color="white"
                >
                  Register
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};

export default RegisterView;
