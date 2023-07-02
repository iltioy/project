import { Button, FormLabel, Link, Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import CodeEntry from "../components/CodeEntry";
import ReactCodeInput from "react-code-input";
import OtpInput from "react-otp-input";
interface LoginFormProps {
    setPage: React.Dispatch<React.SetStateAction<string>>;
}

const LoginForm = ({ setPage }: LoginFormProps) => {
    return (
        <>
            <form action="">
                <FormLabel htmlFor="email">Введите почту:</FormLabel>
                <TextField
                    placeholder="Почта"
                    id="email"
                    name="email"
                    type="email"
                    sx={{
                        marginBottom: "15px",
                        marginTop: "5px",
                    }}
                    fullWidth
                    variant="outlined"
                />

                <FormLabel htmlFor="password">Введите пароль:</FormLabel>
                <TextField
                    placeholder="Пароль"
                    id="password"
                    name="password"
                    type="password"
                    fullWidth
                    sx={{ marginBottom: "25px", marginTop: "5px" }}
                    variant="outlined"
                />

                <Button type="submit" variant="contained">
                    Отправить
                </Button>
            </form>
            <Link
                style={{
                    marginTop: "auto",
                    textAlign: "center",
                    cursor: "pointer",
                }}
                onClick={() => setPage("register")}
            >
                Регистрация
            </Link>
        </>
    );
};

interface RegisterFormProps {
    setPage: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterForm = ({ setPage }: RegisterFormProps) => {
    return (
        <>
            <form action="">
                <FormLabel htmlFor="email">Введите почту:</FormLabel>
                <TextField
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Почта"
                    sx={{
                        marginBottom: "25px",
                        marginTop: "5px",
                    }}
                    fullWidth
                />

                <FormLabel htmlFor="password">Введите пароль:</FormLabel>
                <TextField
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    fullWidth
                    sx={{
                        marginBottom: "10px",
                        marginTop: "5px",
                    }}
                />
                <TextField
                    type="password"
                    name="confPassword"
                    placeholder="Подтверждение пароля"
                    fullWidth
                />

                <LoadingButton
                    variant="contained"
                    sx={{
                        marginTop: "20px",
                    }}
                    // loading
                    onClick={() => {
                        console.log("first");
                        setPage("confirmEmail");
                    }}
                >
                    Продолжить
                </LoadingButton>
            </form>
            <Link
                sx={{
                    marginTop: "auto",
                    textAlign: "center",
                    cursor: "pointer",
                }}
                onClick={() => setPage("login")}
            >
                Есть Аккаунт? Войти.
            </Link>
        </>
    );
};

interface ConfirmEmailProps {
    setPage: React.Dispatch<React.SetStateAction<string>>;
}

const ConfirmEmail = ({ setPage }: ConfirmEmailProps) => {
    const [otp, setOtp] = useState("");

    console.log(otp);

    return (
        <Stack flexDirection="column">
            <Typography
                variant="body1"
                sx={{
                    marginBottom: "15px",
                }}
                color="text.primary"
            >
                На почту $email был выслан код подтверждения, введите его в поле ниже:
            </Typography>
            {/* <CodeEntry numberOfCells={6} /> */}
            {/* <ReactCodeInput type="number" inputMode="numeric" name="asdklasdlas" fields={6} /> */}
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                containerStyle={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "50px",
                }}
                renderInput={(props) => <input {...props} className="inp" />}
                renderSeparator={<span> - </span>}
                shouldAutoFocus
            />
            <Typography
                variant="body1"
                sx={{
                    marginTop: "15px",
                }}
                color="text.primary"
            >
                Не пришло письио? <br />{" "}
                <Link
                    variant="body1"
                    sx={{ cursor: "pointer" }}
                    onClick={() => setPage("register")}
                >
                    Изменить почту
                </Link>
            </Typography>
        </Stack>
    );
};

const AuthPage = () => {
    const [page, setPage] = useState<string>("login");

    return (
        <>
            <Stack
                sx={{
                    dispaly: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                bgcolor="custom.bg.main"
                className="App"
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
                        {page === "login" ? (
                            <LoginForm setPage={setPage} />
                        ) : page === "register" ? (
                            <RegisterForm setPage={setPage} />
                        ) : page === "confirmEmail" ? (
                            <ConfirmEmail setPage={setPage} />
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
