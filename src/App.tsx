import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthPage from "./pages/AuthPage/AuthPage";
import { Routes, Route } from "react-router-dom";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import Navbar from "./components/Navbar";
import { useRef } from "react";
import AllPlaylistsPage from "./pages/AllPlaylistsPlage/AllPlaylistsPage";
import RadioPage from "./pages/RadioPage/RadioPage";
import { Box } from "@mui/material";
import SongTrack from "./components/song_track/SongTrack";
import { useStores } from "./root-store-context";
import { useEffect } from "react";
import ProtectedRoutes from "./pages/Protected/ProtectedRoutes";
import axios from "axios";
import { observer } from "mobx-react-lite";

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

    // primary: {
    //     main: "#F78361",
    // },
  },
});

const App = observer(() => {
  const topRef = useRef<HTMLSpanElement | null>(null);

  const { userStore } = useStores();

  // const updateTokens = async () => {
  //   if (userStore.refresh_token) {
  //     const res = await axios.post("http://localhost:5000/auth/refrest", {}, {
  //       headers: {
  //         Authorization: `Bearer ${userStore.refresh_token}`
  //       }
  //     })

  //     userStore.access_token = res.data?.access_token
  //     userStore.re = res.data?.refresh_token
  //   }
  // };
  const getUserInfo = async () => {
    try {
      const res = await axios.get("/users/get/me", {
        headers: {
          Authorization: `Bearer ${userStore.access_token}`,
        },
      });

      userStore.setUserInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [userStore.access_token]);

  return (
    <Box component="div" bgcolor="custom.bg.main" className="App">
      <ThemeProvider theme={lightTheme}>
        <span ref={topRef}></span>
        <Navbar topRef={topRef} />

        <SongTrack />

        <Routes>
          <Route path="" element={<AuthPage />} />

          <Route element={<ProtectedRoutes />}>
            <Route
              path="/:username/playlist/:playlistName"
              element={<PlaylistPage />}
            />
            <Route path="/:username/playlists" element={<AllPlaylistsPage />} />
            <Route path="/radio" element={<RadioPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Box>
  );
});

export default App;
