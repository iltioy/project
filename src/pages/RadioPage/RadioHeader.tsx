import React from "react";
import { Stack, Typography, Box } from "@mui/material";

enum RadioSubPages {
    ALL = "ВСЁ",
    NEW = "НОВИНКИ",
    TRENDS = "В ТРЕНДЕ",
}

// const navItems = ["Всё", "Новинки", "В тренде", "Чарты", "Подкасты"];
const navItems = [
    {
        label: "Всё",
        enum: RadioSubPages.ALL,
    },
    {
        label: "Новинки",
        enum: RadioSubPages.NEW,
    },
    {
        label: "В тренде",
        enum: RadioSubPages.TRENDS,
    },
];

interface RadioHeaderProps {
    setCurrentSubPage: React.Dispatch<React.SetStateAction<RadioSubPages>>;
    currentSubPage: RadioSubPages;
}

const RadioHeader: React.FC<RadioHeaderProps> = ({
    setCurrentSubPage,
    currentSubPage,
}) => {
    return (
        <Stack
            sx={{
                width: "100%",
                alignItems: "center",
                position: "relative",
                paddingTop: "50px",
            }}
            color="text.primary"
        >
            <Stack
                sx={{
                    width: {
                        xs: "95%",
                        sm: "80%",
                    },
                }}
            >
                <Typography variant="h3" fontWeight="600" marginBottom="30px">
                    Главное
                </Typography>

                {/* <Box>
                    <Box
                        display="inline-block"
                        sx={{
                            borderBottom: "1px solid grey",
                        }}
                    >
                        asd
                    </Box>
                </Box> */}
                <Box>
                    <Stack
                        sx={{
                            borderBottom: "1px solid grey",
                            display: "inline-block",
                            minWidth: "50%",
                        }}
                    >
                        <Stack flexDirection="row" gap="50px">
                            {navItems.map((navItem, index) => {
                                return (
                                    <Typography
                                        variant="body1"
                                        fontWeight="bold"
                                        sx={{
                                            ":hover": {
                                                color: "#FC6064",
                                            },
                                            cursor: "pointer",
                                            paddingBottom: "7px",
                                            // borderBottom: "3px solid orange"
                                        }}
                                        onClick={() => {
                                            setCurrentSubPage(navItem.enum);
                                        }}
                                        key={navItem.enum}
                                    >
                                        {navItem.label.toUpperCase()}
                                    </Typography>
                                );
                            })}
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    );
};

export default RadioHeader;
