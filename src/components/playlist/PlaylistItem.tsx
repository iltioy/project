import { Stack, Typography, Box } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IosShareIcon from "@mui/icons-material/IosShare";
import useHold from "../../hooks/useHold";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PlaylistType } from "../../types";

const PlaylistItemIcons = () => {
  const { ref: favIconRef, scale: favIconScale } = useHold({
    size: 0.9,
    initialScale: 1.15,
  });

  const { ref: shareIconRef, scale: shareIconScale } = useHold({
    size: 0.9,
    initialScale: 1.15,
  });

  return (
    <>
      <Stack
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        gap="10px"
      >
        <Stack
          sx={{
            background: "black",
            opacity: 0.8,
            width: "42px",
            height: "42px",
            display: "flex",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            transition: "0.3s",
            ":hover": {
              transform: `scale(${favIconScale})`,
            },
          }}
          ref={favIconRef}
        >
          <FavoriteBorderIcon
            htmlColor="white"
            sx={{
              width: "25px",
              height: "25px",
            }}
          />
        </Stack>
        <Stack
          sx={{
            background: "orange",
            width: "55px",
            height: "55px",
            display: "flex",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            transition: "0.3s",
            ":hover": {
              transform: "scale(1.15)",
            },
          }}
        >
          <PlayArrowIcon
            sx={{
              width: "30px",
              height: "30px",
            }}
          />
        </Stack>
        <Stack
          sx={{
            background: "black",
            opacity: 0.8,
            width: "42px",
            height: "42px",
            display: "flex",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
            transition: "0.3s",
            ":hover": {
              transform: `scale(${shareIconScale})`,
            },
          }}
          ref={shareIconRef}
        >
          <IosShareIcon
            htmlColor="white"
            sx={{
              width: "25px",
              height: "25px",
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

interface PlaylisyItemProps {
  playlist: PlaylistType;
}

const PlaylistItem: React.FC<PlaylisyItemProps> = ({ playlist }) => {
  return (
    <Stack
      sx={{
        height: "290px",
        width: "230px",
        borderRadius: "5px",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
        cursor: "pointer",
        ":hover .hoverPlaylistItem": {
          display: "flex",
        },
      }}
      color="text.primary"
    >
      <Stack
        className="hoverPlaylistItem"
        sx={{
          position: "absolute",
          zIndex: 2,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "none",
          border: "3px solid orange",
          justifyContent: "center",
        }}
      />

      <Stack
        sx={{
          height: "260px",
          width: "220px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Stack
          sx={{
            height: "200px",
            width: "200px",
            marginBottom: "5px",
            position: "relative",
          }}
        >
          <img
            src={playlist.image.image_url}
            alt=""
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
          />

          <Stack
            className="hoverPlaylistItem"
            sx={{
              position: "absolute",
              zIndex: 3,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              display: "none",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PlaylistItemIcons />
          </Stack>
        </Stack>

        <Typography width="200px" noWrap>
          {playlist.name}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PlaylistItem;
