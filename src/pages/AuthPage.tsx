import {
    Button,
    FormLabel,
    Link,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import OtpInput from "react-otp-input";
interface LoginFormProps {
    setPage: React.Dispatch<React.SetStateAction<string>>;
}

const loginValidationSchema = yup.object({
    email: yup
        .string()
        .email("Введите адрес электронной почты")
        .required("Введите адрес электронной почты"),
    password: yup
        .string()
        .min(8, "Пароль должен содержать минимум 8 символов")
        .required("Введите пароль"),
});

const LoginForm = ({ setPage }: LoginFormProps) => {
    const loginFormik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        // validateOnChange: false,
        // validateOnBlur: false,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        },
    });

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    // };

    return (
        <>
            <form action="" onSubmit={loginFormik.handleSubmit}>
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
                    value={loginFormik.values.email}
                    onChange={loginFormik.handleChange}
                    error={
                        loginFormik.touched.email &&
                        Boolean(loginFormik.errors.email)
                    }
                    helperText={
                        loginFormik.touched.email && loginFormik.errors.email
                    }
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
                    value={loginFormik.values.password}
                    onChange={loginFormik.handleChange}
                    error={
                        loginFormik.touched.password &&
                        Boolean(loginFormik.errors.password)
                    }
                    helperText={
                        loginFormik.touched.password &&
                        loginFormik.errors.password
                    }
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

const registerValidationSchema = yup.object({
    email: yup
        .string()
        .email("Введите адрес электронной почты")
        .required("Введите адрес электронной почты"),
    password: yup
        .string()
        .min(8, "Пароль должен содержать минимум 8 символов")
        .required("Введите пароль"),
    confirmationPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Пароли должны совпадать")
        .required("Введите пароль ещё раз"),
});

interface RegisterFormProps {
    setPage: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterForm = ({ setPage }: RegisterFormProps) => {
    const registerFormik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmationPassword: "",
        },
        validationSchema: registerValidationSchema,
        onSubmit: (values) => {
            console.log("first");
            setPage("confirmEmail");
        },
    });

    return (
        <>
            <form action="" onSubmit={registerFormik.handleSubmit}>
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
                    value={registerFormik.values.email}
                    onChange={registerFormik.handleChange}
                    error={
                        registerFormik.touched.email &&
                        Boolean(registerFormik.errors.email)
                    }
                    helperText={
                        registerFormik.touched.email &&
                        registerFormik.errors.email
                    }
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
                    value={registerFormik.values.password}
                    onChange={registerFormik.handleChange}
                    error={
                        registerFormik.touched.password &&
                        Boolean(registerFormik.errors.password)
                    }
                    helperText={
                        registerFormik.touched.password &&
                        registerFormik.errors.password
                    }
                />
                <TextField
                    type="password"
                    name="confirmationPassword"
                    placeholder="Подтверждение пароля"
                    fullWidth
                    value={registerFormik.values.confirmationPassword}
                    onChange={registerFormik.handleChange}
                    error={
                        registerFormik.touched.confirmationPassword &&
                        Boolean(registerFormik.errors.confirmationPassword)
                    }
                    helperText={
                        registerFormik.touched.confirmationPassword &&
                        registerFormik.errors.confirmationPassword
                    }
                />

                <LoadingButton
                    variant="contained"
                    sx={{
                        marginTop: "20px",
                    }}
                    // loading

                    type="submit"
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

    const handleOtpChange = (info: string) => {
        setOtp(info);

        if (info.length === 6) {
            // make request to server and navigate if correct, otherwise show an error
            console.log("six!");
        }
    };

    return (
        <Stack flexDirection="column">
            <Typography
                variant="body1"
                sx={{
                    marginBottom: "15px",
                }}
                color="text.primary"
            >
                На почту $email был выслан код подтверждения, введите его в поле
                ниже:
            </Typography>
            <OtpInput
                value={otp}
                onChange={(info) => handleOtpChange(info)}
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
