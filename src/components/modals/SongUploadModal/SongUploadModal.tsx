import { Stack, Snackbar, Alert, IconButton, Button } from "@mui/material";
import { useState } from "react";
import { useStores } from "../../../root-store-context";
import { observer } from "mobx-react-lite";
import SongFileInputWindow from "./SongFileInputWindow";
import SongUploadForm from "./SongUploadForm";
import AlertSnackbar from "../../Snackbars/AlertSnackbar";

const SongUploadModal = observer(() => {
  const { modalsStore } = useStores();
  const [file, setFile] = useState<File>();

  const [warning, setWarning] = useState("");
  const [error, setError] = useState("");

  const handleAddFile = (fileToAdd: File) => {
    if (!fileToAdd.type.startsWith("audio/")) {
      setWarning("Загружаемый файл должен быть аудио-файлом!");
      return;
    }

    setFile(fileToAdd);
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
        onClick={() => modalsStore.toggleSongUploadModal()}
        color="text.primary"
      >
        {file ? (
          <SongUploadForm file={file} setError={setError} />
        ) : (
          <SongFileInputWindow handleAddFile={handleAddFile} />
        )}
      </Stack>

      <AlertSnackbar
        message={warning}
        setMessage={setWarning}
        severity="warning"
      />
      <AlertSnackbar message={error} setMessage={setError} severity="error" />
    </>
  );
});

export default SongUploadModal;
