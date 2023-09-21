import { Button, Stack } from "@mui/material";
import { useEffect } from "react";
import { songs } from "../../faker";
import SongRecord from "../SongRecord";

interface SearchWindowProps {
  setIsSearchOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchWindow: React.FC<SearchWindowProps> = ({ setIsSearchOpened }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <Stack
        position="absolute"
        color="text.primary"
        // bottom="0px"
        width="100%"
        height="100%"
        top="0"
        bottom="0"
        left="0"
        right="0"
        bgcolor="rgb(0,0,0)"
        zIndex={10}
        overflow="hidden"
        sx={{
          opacity: 0.7,
        }}
      />
      <Stack
        position="absolute"
        width="100%"
        height="calc(100% - 64px)"
        marginTop="64px"
        zIndex={12}
        alignItems="center"
        sx={{
          opacity: "1",
        }}
        overflow="auto"
        onClick={() => {
          setIsSearchOpened(false);
        }}
        className="searchWindowScroll"
      >
        <Stack
          width="80%"
          //  height="100%"
        >
          <Stack
            marginTop="60px"
            flexDirection="row"
            color="white"
            width="100%"
            justifyContent="center"
            gap="50px"
          >
            <Button
              color="inherit"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Моя музыка
            </Button>
            <Button
              color="primary"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Моя музыка
            </Button>
            <Button
              color="inherit"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Моя музыка
            </Button>
          </Stack>
        </Stack>

        <Stack
          sx={{
            width: {
              xs: "95%",
              sm: "70%",
            },
          }}
          color="white"
          marginTop="20px"
          onClick={(e) => {
            e.stopPropagation();
          }}
          paddingBottom="50px"
        >
          {songs.map((song, index) => {
            return (
              <SongRecord
                key={index}
                song={song}
                sx={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  border: "none",
                }}
                search
              />
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};

export default SearchWindow;
