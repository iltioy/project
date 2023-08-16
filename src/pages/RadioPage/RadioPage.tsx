import { Stack } from "@mui/material";
import RadioHeader from "./RadioHeader";
import { useState } from "react";
import Radio from "./sub_pages/Radio";

enum RadioSubPages {
    ALL = "ВСЁ",
    NEW = "НОВИНКИ",
    TRENDS = "В ТРЕНДЕ",
}

const RadioPage = () => {
    const [currentSubPage, setCurrentSubPage] = useState<RadioSubPages>(
        RadioSubPages.ALL
    );

    return (
        <Stack
            height="100%"
            flexDirection="column"
            bgcolor="custom.bg.main"
            overflow="auto"
            color="text.primary"
            width="100%"
            paddingBottom="75px"
        >
            <RadioHeader
                currentSubPage={currentSubPage}
                setCurrentSubPage={setCurrentSubPage}
            />

            {currentSubPage === RadioSubPages.ALL ? <Radio /> : null}
        </Stack>
    );
};

export default RadioPage;
