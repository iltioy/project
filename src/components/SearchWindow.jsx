import { Stack } from "@mui/material";
import { useEffect } from "react";

const SearchWindow = () => {
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
                bottom="0px"
                width="100%"
                height="100%"
                bgcolor="black"
                zIndex={10}
                overflow="hidden"
                sx={{
                    opacity: 0.4,
                }}
            />
            <Stack
                position="absolute"
                width="100%"
                height="calc(100% - 64px)"
                marginTop="64px"
                zIndex={12}
                sx={{
                    opacity: "1",
                }}
            ></Stack>
        </>
    );
};

export default SearchWindow;
