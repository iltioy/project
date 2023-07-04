import { Stack } from "@mui/material";

import { useState } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ConfirmEmail from "./ConfirmEmail";

export enum AuthPageStatus {
    LOGIN = "login",
    REGISTER = "register",
    CONFIRM_EMAIL = "confirmEmail",
}

const AuthPage = () => {
    const [page, setPage] = useState<AuthPageStatus>(AuthPageStatus.LOGIN);

    const [confEmail, setConfEmail] = useState<string>("");

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
                            <RegisterForm setConfEmail={setConfEmail} setPage={setPage} />
                        ) : page === AuthPageStatus.CONFIRM_EMAIL ? (
                            <ConfirmEmail confEmail={confEmail} setPage={setPage} />
                        ) : (
                            <></>
                        )}
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
};

export default AuthPage;
