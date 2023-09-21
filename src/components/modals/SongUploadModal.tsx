import { Stack } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";

const SongUploadModal = () => {
  const [drag, setDrag] = useState(false);

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    let file = e.dataTransfer.files[0];
    console.log(file);

    setDrag(false);
  };

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
        zIndex={20}
        overflow="hidden"
        sx={{
          opacity: 0.7,
        }}
      />

      <Stack
        position="absolute"
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex={21}
      >
        <label htmlFor="audioFileInput">
          <Stack
            bgcolor="custom.bg.main"
            sx={{
              height: "400px",
              width: "550px",
              border: `2px ${drag ? "dashed" : "solid"}`,
              cursor: "pointer",
            }}
            borderRadius="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={() => {}}
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDrop={(e) => onDropHandler(e)}
          >
            <FileUploadIcon
              sx={{
                fontSize: {
                  md: "125px",
                },
              }}
            />
          </Stack>
        </label>

        <input
          style={{ display: "none" }}
          type="file"
          id="audioFileInput"
          accept="audio/*"
        />
      </Stack>
    </>
  );
};

export default SongUploadModal;
