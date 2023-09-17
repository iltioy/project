import { Stack } from "@mui/material";

import { useEffect, useState } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ConfirmEmail from "./ConfirmEmail";
import { useStores } from "../../root-store-context";
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";

export enum AuthPageStatus {
  LOGIN = "login",
  REGISTER = "register",
  CONFIRM_EMAIL = "confirmEmail",
}

interface RegisterCredentials {
  email: string;
  password: string;
}

const AuthPage = observer(() => {
  const { userStore } = useStores();
  const navigate = useNavigate();

  useEffect(() => {
    if (userStore.access_token) {
      navigate("/radio");
    }
  }, [navigate, userStore.access_token]);

  const [page, setPage] = useState<AuthPageStatus>(AuthPageStatus.LOGIN);

  const [registerCredentials, setRegisterCredentials] =
    useState<RegisterCredentials | null>(null);

  return (
    <>
      <Stack
        sx={{
          dispaly: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
        bgcolor="custom.bg.main"
      >
        <Stack
          sx={{
            height: "500px",
            width: "400px",
            borderRadius: 3,
            boxShadow: 4,
          }}
          boxShadow="0px 0px 20px primary.main"
          bgcolor="custom.bg.secondary"
        >
          <Stack
            sx={{
              padding: "40px",
            }}
            height="100%"
          >
            {page === AuthPageStatus.LOGIN ? (
              <LoginForm setPage={setPage} />
            ) : page === AuthPageStatus.REGISTER ? (
              <RegisterForm
                setRegisterCredentials={setRegisterCredentials}
                setPage={setPage}
              />
            ) : page === AuthPageStatus.CONFIRM_EMAIL ? (
              <ConfirmEmail
                registerCredentials={registerCredentials}
                setPage={setPage}
              />
            ) : (
              <></>
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
});

export default AuthPage;
