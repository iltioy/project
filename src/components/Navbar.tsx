import {
    AppBar,
    Button,
    Stack,
    Toolbar,
    Typography,
    InputBase,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useLocation } from "react-router";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import SearchWindow from "./SearchWindow";
import { useNavigate } from "react-router";

interface NavbarProps {
    topRef: React.MutableRefObject<HTMLSpanElement | null>;
}

const Navbar = ({ topRef }: NavbarProps) => {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    let themeColor = theme.palette.mode === "dark" ? "white" : "black";

    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isSearchOpened, setIsSearchOpened] = useState(false);

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
                height: "64px",
            }}
        >
            <Toolbar sx={{ width: { xs: "100%", sm: "80%" } }}>
                <Typography
                    variant="h6"
                    color="text.primary"
                    component="div"
                    display={`${isSearchOpened ? "none" : "block"}`}
                    sx={{
                        flex: {
                            xs: "1",
                            md: "unset",
                        },
                    }}
                    noWrap
                >
                    Твоя Музыка
                </Typography>
                <Stack
                    flexDirection="row"
                    color="text.primary"
                    marginLeft="30px"
                    flex={1}
                    sx={{
                        display: {
                            xs: "none",
                            md: isSearchOpened ? "none" : "flex",
                        },
                    }}
                >
                    <Button color="inherit" sx={{ marginRight: "5px" }}>
                        Радио
                    </Button>

                    <Button color="inherit" sx={{ marginRight: "5px" }}>
                        Новинки
                    </Button>

                    <Button
                        color="inherit"
                        onClick={() => navigate("username/playlists")}
                    >
                        Мои плейлисты
                    </Button>
                </Stack>

                <Stack
                    flexDirection="row"
                    alignItems="center"
                    p="4px"
                    borderBottom={{
                        sm: `1px solid ${
                            isSearchOpened ? "#ffffff" : themeColor
                        }`,
                        xs: "none",
                        zIndex: 11,
                    }}
                    flex={`${isSearchOpened ? "1" : "unset"}`}
                >
                    <SearchIcon
                        htmlColor={isSearchOpened ? "#ffffff" : themeColor}
                        onClick={() => {
                            setIsInputFocused(true);
                        }}
                    />

                    <InputBase
                        sx={{
                            paddingLeft: "5px",
                            width: "100%",
                            display: {
                                xs: isInputFocused ? "block" : "none",
                                sm: "block",
                            },
                            color: isSearchOpened ? "#ffffff" : themeColor,
                        }}
                        placeholder="Посик..."
                        onFocus={() => {
                            setIsInputFocused(true);
                            setIsSearchOpened(true);
                            topRef.current?.scrollIntoView();
                        }}
                        // onBlur={() => setIsSearchOpened(false)}
                    />
                </Stack>
            </Toolbar>

            {isSearchOpened && (
                <SearchWindow setIsSearchOpened={setIsSearchOpened} />
            )}
        </AppBar>
    );
};

export default Navbar;
