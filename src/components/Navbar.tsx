import { AppBar, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router";

const Navbar = () => {
    const theme = useTheme();
    const location = useLocation();
    console.log(location.pathname);
    if (location.pathname === "/") {
        return <></>;
    }

    return (
        <AppBar
            position="static"
            sx={{
                background: `${theme.palette.custom?.bg?.main}`,
                display: "flex",
                alignItems: "center",
            }}
        >
            <Toolbar sx={{ width: { xs: "100%", sm: "80%" } }}>
                <Typography variant="h6" color="text.primary" component="div">
                    Твоя Музыка
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
