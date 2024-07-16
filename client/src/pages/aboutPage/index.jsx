import { Box, Typography, useMediaQuery } from "@mui/material";
import FlexStyling from "../../components/FlexStyling";
import profilePicture from "../../assets/profile2.jpg";
import { textPrimary } from "../../../theme";
import { useEffect } from "react";

export default function About() {
    useEffect(() => {
        document.title = "JSN - About";
    }, []);

    const isNonMobileScreens = useMediaQuery("(min-width: 650px");

    return (
        <FlexStyling
            margin="5%"
            borderRadius="0.2rem"
            flexDirection={isNonMobileScreens ? "row" : "column"}
            style={{ alignItems: "flex-start" }}
        >
            <Box margin="1.5%">
                <Typography
                    sx={{
                        color: textPrimary,
                        fontSize: "1.8rem",
                        fontWeight: "bold",
                    }}
                >
                    About Me
                </Typography>
                <br />
                <Box>
                    <img
                        src={profilePicture}
                        alt="User Image"
                        loading="lazy"
                        style={{
                            width: "10rem",
                            height: "auto",
                            borderRadius: "0.2rem",
                        }}
                    />
                </Box>
            </Box>
            <Box margin="1.5%">
                <Typography sx={{ color: textPrimary }}>
                    Nunc pharetra finibus est at efficitur. Praesent sed congue
                    diam. Integer gravida dui mauris, ut interdum nunc egestas
                    sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
                    porta. Nam quis arcu non lectus tincidunt fermentum.
                    Suspendisse aliquet orci porta quam semper imperdiet.
                    Praesent euismod mi justo, faucibus scelerisque risus cursus
                    in. Sed rhoncus mollis diam, sit amet facilisis lectus
                    blandit at.
                </Typography>
                <br />
                <Typography sx={{ color: textPrimary }}>
                    Nunc pharetra finibus est at efficitur. Praesent sed congue
                    diam. Integer gravida dui mauris, ut interdum nunc egestas
                    sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
                    porta. Nam quis arcu non lectus tincidunt fermentum.
                    Suspendisse aliquet orci porta quam semper imperdiet.
                    Praesent euismod mi justo, faucibus scelerisque risus cursus
                    in. Sed rhoncus mollis diam, sit amet facilisis lectus
                    blandit at.
                </Typography>
            </Box>
        </FlexStyling>
    );
}
