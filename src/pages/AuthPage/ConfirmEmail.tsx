import { AuthPageStatus } from "./AuthPage";
import { Link, Typography, Stack } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

import OTPInput from "react-otp-input";

interface ConfirmEmailProps {
    setPage: React.Dispatch<React.SetStateAction<AuthPageStatus>>;
    confEmail: string;
}

const ConfirmEmail = ({ setPage, confEmail }: ConfirmEmailProps) => {
    const [otp, setOtp] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const theme = useTheme();

    const handleOtpChange = (info: string) => {
        if (isLoading) {
            return;
        }

        if (info.length === 6) {
            if (!isLoading) {
                setIsLoading(true);
                setOtp(info);
                return;
            }
        }

        setOtp(info);

        // handle request and navigate
    };

    return (
        <Stack flexDirection="column" height="100%">
            <Typography
                variant="body1"
                sx={{
                    marginBottom: "15px",
                    wordBreak: "break-word",
                }}
                color="text.primary"
            >
                На почту вашу был выслан код подтверждения, введите его в поле ниже:
            </Typography>
            <OTPInput
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
                renderInput={(props) => (
                    <input
                        {...props}
                        className={`inp ${theme.palette.mode === "dark" ? "dark" : ""}`}
                    />
                )}
                renderSeparator={<span> - </span>}
                shouldAutoFocus
            />
            <Typography
                variant="body2"
                sx={{
                    marginTop: "auto",
                    textAlign: "center",
                }}
                color="text.primary"
            >
                Не пришло письмо? <br />{" "}
                <Link
                    variant="body2"
                    sx={{ cursor: "pointer" }}
                    onClick={() => setPage(AuthPageStatus.REGISTER)}
                >
                    Изменить почту
                </Link>
            </Typography>
        </Stack>
    );
};

export default ConfirmEmail;
