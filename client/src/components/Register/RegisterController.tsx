import RegisterView from "./RegisterView";
import { useNavigate } from "react-router";
import { useMutation } from "@apollo/client";
import { useAuth } from "../../hooks/useAuth";
import {
  RegisterDocument,
  RegisterMutation,
} from "../../graphql/generated/graphql";

export type TRegisterForm = {
  email: string;
  password: string;
  repeatPassword: string;
  yahooFinanceApiKey: string;
};

const RegisterController = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [register] = useMutation<RegisterMutation>(RegisterDocument);

  const handleSubmit = (values: TRegisterForm) => {
    register({
      variables: {
        email: values.email,
        password: values.password,
        yahooFinanceApiKey: values.yahooFinanceApiKey,
      },
    })
      .then((res) => {
        const accessToken = res.data?.register.accessToken;
        const username = res.data?.register.user.email;

        if (accessToken && username) {
          setAuth({ accessToken, username });
          navigate("/");
        }
      })
      .catch((err) => console.log("error: ", err));
  };
  return <RegisterView onSubmit={handleSubmit} />;
};

export default RegisterController;
