import { useMutation } from "@apollo/client";
import { LoginMutation, LoginDocument } from "../../graphql/generated/graphql";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import LoginView from "./LoginView";
import { useState } from "react";

export type TLoginForm = {
  email: string;
  password: string;
};

export const LoginController = () => {
  const [login] = useMutation<LoginMutation>(LoginDocument);
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [invalidLogin, setInvalidLogin] = useState(false);

  const handleSubmit = (values: TLoginForm) => {
    login({
      variables: {
        email: values.email,
        password: values.password,
      },
    })
      .then((res) => {
        const accessToken = res.data?.login.accessToken;
        const username = res.data?.login.user.email;
        if (accessToken && username) {
          setAuth({ accessToken, username });
          navigate("/");
        } else {
          // TODO: show login error
          console.log("no token");
        }
      })
      .catch(() => setInvalidLogin(true));
  };

  return <LoginView onSubmit={handleSubmit} invalidLogin={invalidLogin} />;
};

export default LoginController;
