import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareSharpIcon from "@mui/icons-material/ShareSharp";
import BlockSharpIcon from "@mui/icons-material/BlockSharp";
import PauseIcon from "@mui/icons-material/Pause";
import SongProgress from "./SongProgress";

const SongTrack = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  console.log("Song track rendered!");

  const handlePlayMusic = () => {
    setIsPlaying(true);
  };

  const handlePauseMusic = () => {
    setIsPlaying(false);
  };

  return (
    <Stack
      position="fixed"
      bottom="0"
      color="text.primary"
      bgcolor="custom.bg.main"
      borderTop="1px solid grey"
      width="100%"
      zIndex={3}
      height="70px"
      alignItems="center"
      className="noselect"
    >
      <SongProgress progress={progress} setProgress={setProgress} />
      <Stack
        sx={{
          width: {
            xs: "95%",
            sm: "80%",
          },
          height: "100%",
        }}
        flexDirection="row"
      >
        <Stack
          flexDirection="row"
          alignItems="center"
          height="100%"
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          {isPlaying ? (
            <PauseIcon
              sx={{
                fontSize: "40px",
                cursor: "pointer",
                color: "#A1A1A2",
                ":hover": {
                  color: "#424242",
                },
              }}
              onClick={() => handlePauseMusic()}
            />
          ) : (
            <PlayArrowIcon
              sx={{
                fontSize: "40px",
                cursor: "pointer",
                color: "#A1A1A2",
                ":hover": {
                  color: "#424242",
                },
              }}
              onClick={() => handlePlayMusic()}
            />
          )}

          <SkipNextIcon
            sx={{
              fontSize: "40px",
              marginLeft: "17px",
              cursor: "pointer",
              color: "#A1A1A2",
              ":hover": {
                color: "#424242",
              },
            }}
          />
        </Stack>

        <Stack
          flexDirection="row"
          height="100%"
          alignItems="center"
          sx={{
            marginLeft: {
              xs: "10px",
              sm: "50px",
            },
          }}
        >
          <img
            src="https://numero.twic.pics/images/flexible_grid/100/nf_perception_cvr_final_0.jpg"
            alt=""
            style={{
              height: "53px",
              width: "53px",
              objectFit: "cover",
              borderRadius: "7px",
              cursor: "pointer",
            }}
          />

          <Stack
            height="53px"
            flexDirection="column"
            marginLeft="20px"
            justifyContent="center"
          >
            <Typography
              noWrap
              fontWeight="700"
              sx={{
                ":hover": {
                  color: "#FC6064",
                },
                cursor: "pointer",
              }}
            >
              PAID MY DUES
            </Typography>
            <Typography
              noWrap
              sx={{
                ":hover": {
                  color: "#FC6064",
                },
                cursor: "pointer",
              }}
            >
              NF
            </Typography>
          </Stack>
        </Stack>

        <Stack
          flexDirection="row"
          height="100%"
          alignItems="center"
          gap="15px"
          marginLeft="30px"
          sx={{
            cursor: "pointer",
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          <FavoriteBorderIcon
            sx={{
              fontSize: "24px",
              cursor: "pointer",
              color: "#A1A1A2",
              ":hover": {
                color: "#424242",
              },
            }}
          />
          <ShareSharpIcon
            sx={{
              fontSize: "24px",
              cursor: "pointer",
              color: "#A1A1A2",
              ":hover": {
                color: "#424242",
              },
            }}
          />
          <BlockSharpIcon
            sx={{
              fontSize: "24px",
              cursor: "pointer",
              color: "#A1A1A2",
              ":hover": {
                color: "#424242",
              },
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SongTrack;
