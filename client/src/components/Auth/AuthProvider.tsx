import { createContext, useState } from "react";

type TAuth = {
  accessToken?: string;
  username?: string;
};

type TAuthContext = {
  auth: TAuth;
  setAuth: React.Dispatch<React.SetStateAction<TAuth>>;
};

export const AuthContext = createContext<TAuthContext>({
  auth: {},
  setAuth: () => undefined,
});

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<TAuth>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
