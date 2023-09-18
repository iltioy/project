import {
  FormLabel,
  Stack,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import * as yup from "yup";
import { observer } from "mobx-react-lite";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import { LoadingButton } from "@mui/lab";

const passwordRecoveryValidationSchema = yup.object({
  email: yup
    .string()
    .email("Введите адрес электронной почты")
    .required("Введите адрес электронной почты"),
});

const RecoverPassword = observer(() => {
  const [isLoading, setIsLoading] = useState(false);

  const passwordRecoveryFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: passwordRecoveryValidationSchema,
    onSubmit: async (values, { setErrors }) => {
      setIsLoading(true);
      try {
        await axios.post("/users/password/recover", {
          email: values.email,
        });

        console.log("success!");
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        if (error?.response?.status === 404) {
          setErrors({
            email: "Аккаунт с такой почтой не найден!",
          });
        }
        console.log(error);
      }
    },
  });

  return (
    <>
      <form onSubmit={passwordRecoveryFormik.handleSubmit}>
        <Stack height="100%" flexDirection="column" color="text.primary">
          <Typography
            variant="h5"
            sx={{
              marginBottom: "15px",
            }}
          >
            Восстановление пароля
          </Typography>

          <FormLabel
            htmlFor="email"
            sx={{
              marginBottom: "3px",
            }}
          >
            Ваша почта:
          </FormLabel>
          <TextField
            id="email"
            variant="standard"
            placeholder="expample@gmail.com"
            sx={{
              marginBottom: "15px",
            }}
            value={passwordRecoveryFormik.values.email}
            onChange={passwordRecoveryFormik.handleChange}
            error={
              passwordRecoveryFormik.touched.email &&
              Boolean(passwordRecoveryFormik.errors.email)
            }
            helperText={
              passwordRecoveryFormik.touched.email &&
              passwordRecoveryFormik.errors.email
            }
          />
          <Box>
            <LoadingButton
              loading={isLoading}
              variant="contained"
              type="submit"
            >
              Восстановить
            </LoadingButton>
          </Box>
        </Stack>
      </form>
    </>
  );
});

export default RecoverPassword;
