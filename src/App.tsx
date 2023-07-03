import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthPage from "./pages/AuthPage/AuthPage";
import { Routes, Route } from "react-router-dom";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";

const dark = false;
const darkTheme = createTheme({
    palette: {
        mode: "dark",
        custom: {
            primary: {
                main: "#F54B64",
                secondary: "#F78361",
            },
            secondary: "#242A38",
            bg: {
                main: "#121212",
                secondary: "#181818",
            },
            main: "#121212",
        },

        // primary: {
        //     main: "#F78361",
        // },
    },
});

const lightTheme = createTheme({
    palette: {
        mode: "light",
        custom: {
            primary: {
                main: "#F54B64",
                secondary: "#F78361",
            },
            secondary: "#242A38",
            bg: {
                main: "#E7EBF0",
                secondary: "#ffffff",
            },
            main: "#ffffff",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Routes>
                <Route path="" element={<AuthPage />} />
                <Route path="/:userName/palylist/:playlistName" element={<PlaylistPage />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
