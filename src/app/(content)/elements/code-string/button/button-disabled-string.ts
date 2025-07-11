export const buttonDisabledString = `import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const ButtonDisabledPreview = () => {
    return (
        <Box>
            <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                alignItems={"center"}
                rowGap={2}
            >
                <Button
                    disabled
                    sx={{
                        ":disabled": {
                            cursor: "not-allowed",
                            pointerEvents: "all !important",
                        },
                    }}
                >
                    Disabled
                </Button>

                <Button
                    disabled
                    sx={{
                        ":disabled": {
                            cursor: "not-allowed",
                            pointerEvents: "all !important",
                            bgcolor: "#e6007721",
                        },
                    }}
                >
                    Custom color
                </Button>
            </Stack>
        </Box>
    );
};`;
