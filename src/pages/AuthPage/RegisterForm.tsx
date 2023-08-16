import * as yup from "yup";
import { AuthPageStatus } from "./AuthPage";
import { useFormik } from "formik";
import { FormLabel, TextField, Link } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

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
    setPage: React.Dispatch<React.SetStateAction<AuthPageStatus>>;
    setConfEmail: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterForm = ({ setPage, setConfEmail }: RegisterFormProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const registerFormik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmationPassword: "",
        },
        validationSchema: registerValidationSchema,
        onSubmit: async (values) => {
            // setPage("confirmEmail");

            setIsLoading(true);

            setTimeout(() => {
                setIsLoading(false);
                setConfEmail(values.email);
                setPage(AuthPageStatus.CONFIRM_EMAIL);
                alert(JSON.stringify(values));
            }, 3000);
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
                    loading={isLoading}
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
                onClick={() => setPage(AuthPageStatus.LOGIN)}
            >
                Есть Аккаунт? Войти.
            </Link>
        </>
    );
};

export default RegisterForm;
