import { Stack, Snackbar, Alert, IconButton, Button } from "@mui/material";
import { useState } from "react";
import { useStores } from "../../../root-store-context";
import { observer } from "mobx-react-lite";
import SongFileInputWindow from "./SongFileInputWindow";
import CloseIcon from "@mui/icons-material/Close";
import SongUploadForm from "./SongUploadForm";

const SongUploadModal = observer(() => {
  const { modalsStore } = useStores();
  const [file, setFile] = useState<File>();

  const [error, setError] = useState("");

  const handleAddFile = (fileToAdd: File) => {
    if (!fileToAdd.type.startsWith("audio/")) {
      setError("Загружаемый файл должен быть аудио-файлом!");
      return;
    }

    setFile(fileToAdd);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setError("")}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

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
        onClick={() => modalsStore.toggleSongUploadModal()}
        color="text.primary"
      >
        {file ? (
          <SongUploadForm file={file} />
        ) : (
          <SongFileInputWindow handleAddFile={handleAddFile} />
        )}
      </Stack>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError("")}
      >
        <Alert severity="warning" sx={{ width: "100%" }} action={action}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
});

export default SongUploadModal;
