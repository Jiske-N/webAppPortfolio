import FlexStyling from "../../components/FlexStyling";
import { useMediaQuery, Typography, List, ListItem } from "@mui/material";
import { textPrimary, hover } from "../../../theme";
import { useEffect } from "react";

export default function Resume() {
    useEffect(() => {
        document.title = "JSN - Resume";
    }, []);
    const isNonMobileScreens = useMediaQuery("(min-width: 1200px");
    const handleClick = () => {
        const pdfUrl = "../../assets/Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <FlexStyling
            margin="5%"
            borderRadius="0.2rem"
            style={isNonMobileScreens ? { width: "45.4%" } : { width: "auto" }}
        >
            <FlexStyling
                sx={{ width: "100%" }}
                flexDirection="column"
                style={{ alignItems: "flex-start" }}
                margin="1.2rem 4%"
                color={textPrimary}
            >
                <Typography
                    sx={{
                        fontSize: "1.6rem",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                    }}
                >
                    Resume
                </Typography>
                <FlexStyling flexDirection="row">
                    <Typography
                        sx={{
                            fontSize: "1rem",
                            margin: "1rem 0.4rem 1rem 0",
                        }}
                    >
                        Download my
                    </Typography>
                    <Typography
                        onClick={handleClick}
                        sx={{
                            fontSize: "1rem",
                            // margin: "1rem 0",
                            fontWeight: "bold",
                            color: hover,
                            "&:hover": {
                                color: textPrimary,
                                cursor: "pointer",
                            },
                        }}
                    >
                        resume
                    </Typography>
                </FlexStyling>
                <Typography
                    sx={{
                        fontSize: "1.2rem",
                        margin: "1rem 0 0 0",
                    }}
                >
                    Front-end Proficiencies
                </Typography>
                <List>
                    <ListItem>
                        <Typography>HTML</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>CSS</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Javascript</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>jQuery</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>responsive design</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>React</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Bootstrap</Typography>
                    </ListItem>
                </List>
                <Typography
                    sx={{
                        fontSize: "1.2rem",
                        margin: "1rem 0 0 0",
                    }}
                >
                    Back-end Proficiencies
                </Typography>
                <List>
                    <ListItem>
                        <Typography>APIs</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Node</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Express</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>MySQL, Sequelize</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>MongoDb, Mongoose</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>REST</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>GraphQL</Typography>
                    </ListItem>
                </List>
            </FlexStyling>
        </FlexStyling>
    );
}
