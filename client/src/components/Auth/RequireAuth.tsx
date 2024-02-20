import { useMutation } from "@apollo/client";
import { Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import {
  RefreshAccessTokenDocument,
  RefreshAccessTokenMutation,
} from "../../graphql/generated/graphql";
import { useAuth } from "../../hooks/useAuth";

export const RequireAuth = () => {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const [refreshChecked, setRefreshChecked] = useState(false);

  const [refreshAccessToken] = useMutation<RefreshAccessTokenMutation>(
    RefreshAccessTokenDocument
  );

  // TODO: Shouldn't conditionally call mutation in effect
  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (auth.accessToken && auth.username) {
        setRefreshChecked(true);
      } else if (!auth.accessToken) {
        refreshAccessToken()
          .then((resp) => {
            const accessToken = resp.data?.refreshAccessToken.accessToken;
            const username = resp.data?.refreshAccessToken.user.email;

            if (accessToken && username) {
              setAuth({ accessToken, username });
            }
          })
          .finally(() => setRefreshChecked(true));
      }
    }

    return () => {
      isMounted = false;
    };
  }, [auth.accessToken]);

  if (!refreshChecked) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  if (!auth.username || !auth.accessToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
