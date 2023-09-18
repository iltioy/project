import { Avatar, Stack, Typography, Box } from "@mui/material";
import MixSongsButton from "../../components/MixSongsButton";
import { observer } from "mobx-react-lite";
import { useStores } from "../../root-store-context";

const AllPlaylistsHeader = observer(() => {
    const { userStore } = useStores();

    return (
        <Stack
            sx={{
                width: "100%",
                alignItems: "center",
                marginBottom: "40px",
            }}
            bgcolor="custom.bg.secondary"
            color="text.primary"
        >
            <Stack
                sx={{
                    width: {
                        xs: "95%",
                        sm: "80%",
                    },
                }}
                height="100%"
                flexDirection="row"
            >
                <Avatar
                    src="https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-200"
                    alt="default user"
                    sx={{
                        height: {
                            xs: "125px",
                            md: "200px",
                        },
                        width: {
                            xs: "125px",
                            md: "200px",
                        },
                        marginTop: {
                            xs: "37.5px",
                            md: "50px",
                        },
                        marginBottom: {
                            xs: "37.5px",
                            md: "50px",
                        },
                        objectFit: "cover",
                    }}
                />

                <Stack
                    flexDirection="column"
                    paddingLeft="30px"
                    sx={{
                        marginTop: {
                            xs: "37.5px",
                            md: "50px",
                        },
                        overflow: "hidden",
                    }}
                >
                    <Typography
                        variant="caption"
                        color="grey"
                        sx={{
                            fontSize: {
                                xs: "17px",
                                md: "27px",
                            },
                        }}
                    >
                        Коллекция
                    </Typography>

                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            fontSize: {
                                xs: "20px",
                                md: "30px",
                            },
                            marginBottom: {
                                xs: "15px",
                                md: "30px",
                            },
                        }}
                    >
                        {userStore.user.username}
                    </Typography>

                    <Box>
                        <MixSongsButton />
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    );
});

export default AllPlaylistsHeader;
