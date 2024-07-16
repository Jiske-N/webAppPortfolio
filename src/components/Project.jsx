import { Box, Typography } from "@mui/material";
import FlexStyling from "./FlexStyling";
import GitHubIcon from "@mui/icons-material/GitHub";
import { textPrimary, hover } from "../../theme";

const Project = (project) => {
    return (
        <FlexStyling
            boxSizing="border-box"
            padding="1.2rem 6%"
            sx={{
                backgroundImage: `url(${project.screenshot})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 1,
                maxWidth: "100%",
                aspectRatio: 3 / 2,
            }}
        >
            <Box maxWidth="100%">
                {/* upper title and icon */}
                <Box style={{ display: "inline-block" }}>
                    <FlexStyling
                        marginBottom="1.5rem"
                        borderRadius="0.2rem"
                        boxSizing="border-box"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            maxWidth: "100%",
                        }}
                    >
                        {/* container below sets the second anchor tag with the icon to always appear on the right */}
                        <FlexStyling
                            gap="1.75rem"
                            borderRadius="0.2rem"
                            style={{ padding: "0.25rem" }}
                        >
                            <a
                                href={project.deployment}
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    textDecoration: "none",
                                    marginRight: "1rem",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "1.4rem",
                                        color: textPrimary,
                                        fontWeight: "bold",
                                        "&:hover": {
                                            color: hover,
                                            cursor: "pointer",
                                        },
                                    }}
                                >
                                    {project.title}
                                </Typography>
                            </a>
                            {/* I think this is supposed to be an anchor tag rather than link or useNavigate as it's an external url??? */}
                            <a href={project.repository}>
                                <GitHubIcon
                                    label="GitHub"
                                    value="github"
                                    sx={{
                                        color: textPrimary,
                                        "&:hover": {
                                            color: hover,
                                            cursor: "pointer",
                                        },
                                    }}
                                />
                            </a>
                        </FlexStyling>
                    </FlexStyling>
                </Box>

                {/* lower text */}
                <Box style={{ display: "inline-block" }}>
                    <FlexStyling
                        gap="1.75rem"
                        borderRadius="0.2rem"
                        style={{ padding: "0.25rem" }}
                    >
                        <Typography>{project.technology}</Typography>
                    </FlexStyling>
                </Box>
            </Box>
        </FlexStyling>
    );
};

export default Project;
