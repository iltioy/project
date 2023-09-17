import * as yup from "yup";
import { AuthPageStatus } from "./AuthPage";
import { useFormik } from "formik";
import { FormLabel, TextField, Link, Button } from "@mui/material";
import axios from "axios";
import { useStores } from "../../root-store-context";
import { useNavigate } from "react-router";

interface LoginFormProps {
  setPage: React.Dispatch<React.SetStateAction<AuthPageStatus>>;
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
  const { userStore } = useStores();
  const navigate = useNavigate();

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    // validateOnChange: false,
    // validateOnBlur: false,
    onSubmit: async (values, { setErrors }) => {
      try {
        const res = await axios.post("/auth/signin", {
          email: values.email,
          password: values.password,
        });

        const { access_token, refresh_token } = res.data;

        userStore.setTokens(access_token, refresh_token);
        navigate("/radio");
      } catch (error) {
        setErrors({
          password: "Неверные данные для входа!",
        });
      }
    },
  });

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
          error={loginFormik.touched.email && Boolean(loginFormik.errors.email)}
          helperText={loginFormik.touched.email && loginFormik.errors.email}
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
            loginFormik.touched.password && Boolean(loginFormik.errors.password)
          }
          helperText={
            loginFormik.touched.password && loginFormik.errors.password
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
        onClick={() => setPage(AuthPageStatus.REGISTER)}
      >
        Регистрация
      </Link>
    </>
  );
};

export default LoginForm;
