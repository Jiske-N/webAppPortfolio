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
        // specify the filename
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const frontEnd = [
        {
            key: 1,
            proficiency: "HTML",
        },
        {
            key: 2,
            proficiency: "CSS",
        },
        {
            key: 3,
            proficiency: "Javascript",
        },
        {
            key: 4,
            proficiency: "jQuery",
        },
        {
            key: 5,
            proficiency: "Responsive Design",
        },
        {
            key: 6,
            proficiency: "React",
        },
        {
            key: 7,
            proficiency: "Bootstrap",
        },
    ];

    const backEnd = [
        {
            key: 1,
            proficiency: "APIs",
        },
        {
            key: 2,
            proficiency: "Node",
        },
        {
            key: 3,
            proficiency: "Express",
        },
        {
            key: 4,
            proficiency: "MySQL, Sequelize",
        },
        {
            key: 5,
            proficiency: "MongoDb, Mongoose",
        },
        {
            key: 6,
            proficiency: "REST",
        },
        {
            key: 7,
            proficiency: "GraphQL",
        },
    ];

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
                    {frontEnd.map((item) => (
                        <ListItem key={item.key}>
                            <Typography>{item.proficiency}</Typography>
                        </ListItem>
                    ))}
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
                    {backEnd.map((item) => (
                        <ListItem key={item.key}>
                            <Typography>{item.proficiency}</Typography>
                        </ListItem>
                    ))}
                </List>
            </FlexStyling>
        </FlexStyling>
    );
}
