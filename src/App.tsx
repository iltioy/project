import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthPage from "./pages/AuthPage/AuthPage";
import { Routes, Route } from "react-router-dom";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import Navbar from "./components/Navbar";

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
                secondary: "#FFFAFA",
                main: "#ffffff",
            },
            main: "#ffffff",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <Navbar />
            <Routes>
                <Route path="" element={<AuthPage />} />
                <Route path="/:userName/playlist/:playlistName" element={<PlaylistPage />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
