import { Drawer, Stack } from "@mui/material";

interface SettingsDrawerProps {
    isSettingsDrawerOpen: boolean;
    setIsSettingsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsDrawer: React.FC<SettingsDrawerProps> = ({
    isSettingsDrawerOpen,
    setIsSettingsDrawerOpen,
}) => {
    return (
        <Drawer
            anchor="right"
            open={isSettingsDrawerOpen}
            onClose={() => setIsSettingsDrawerOpen(false)}
        >
            <Stack
                sx={{
                    width: "500px",
                    height: "100%",
                }}
                bgcolor="custom.bg.secondary"
            >
                Настройки
            </Stack>
        </Drawer>
    );
};

export default SettingsDrawer;
