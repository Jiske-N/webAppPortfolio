import { Box, MenuItem, Typography } from "@mui/material";
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
                minWidth: "50%",
                aspectRatio: 3 / 2,
            }}
        >
            <Box>
                <Box style={{ display: "inline-block" }}>
                    <FlexStyling marginBottom="1.5rem" borderRadius="0.2rem">
                        <a
                            href={project.deployment}
                            style={{
                                textDecoration: "none",
                                marginRight: "1rem",
                            }}
                        >
                            <MenuItem
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
                            </MenuItem>
                        </a>
                        {/* I think this is supposed to be an anchor tag rather than link or useNavigate as it's an external url??? */}
                        <a href={project.repository}>
                            <MenuItem>
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
                            </MenuItem>
                        </a>
                    </FlexStyling>
                </Box>
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
