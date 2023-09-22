import { Stack } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";
import { observer } from "mobx-react-lite";

interface SongFileInputWindowProps {
  handleAddFile: (file: File) => void;
}

const SongFileInputWindow: React.FC<SongFileInputWindowProps> = observer(
  ({ handleAddFile }) => {
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
      setDrag(false);
      if (!file) return;

      handleAddFile(file);
    };
    return (
      <>
        <label htmlFor="audioFileInput" onClick={(e) => e.stopPropagation()}>
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
            onClick={(e) => e.stopPropagation()}
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
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => {
            const files = e.target.files;
            if (!files) return;

            const file = files[0];
            if (!file) return;

            handleAddFile(file);
          }}
        />
      </>
    );
  }
);

export default SongFileInputWindow;
