import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FlexStyling from "./FlexStyling";
import { background, textPrimary, hover } from "../../theme.js";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SvgIcon } from "@mui/material";

// no media queries necessary as it functions on all modern mobile sizes
const Footer = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // svg image for stackoverflow
    const StackOverflowIcon = (
        <SvgIcon fontSize="small">
            <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
        </SvgIcon>
    );

    return (
        <FlexStyling
            padding="0.3rem 6%"
            position="relative"
            left="0"
            bottom="0"
            right="0"
            // justify content wrapped in style to override default property
            style={{ justifyContent: "center" }}
        >
            <BottomNavigation
                sx={{
                    backgroundColor: background,
                    opacity: 0.9,
                }}
                value={value}
                onChange={handleChange}
            >
                {/* I think these are supposed to be an anchor tags rather than link or useNavigate as they're external urls??? */}
                <a href="https://github.com/Jiske-N/">
                    <BottomNavigationAction
                        label="GitHub"
                        value="github"
                        icon={<GitHubIcon />}
                        sx={{
                            color: textPrimary,
                            "&:hover": {
                                color: hover,
                                cursor: "pointer",
                            },
                        }}
                    />
                </a>
                <a href="https://au.linkedin.com">
                    <BottomNavigationAction
                        label="LinkedIn"
                        value="linkedin"
                        icon={<LinkedInIcon />}
                        sx={{
                            color: textPrimary,
                            "&:hover": {
                                color: hover,
                                cursor: "pointer",
                            },
                        }}
                    />
                </a>
                <a href="https://stackoverflow.com">
                    <BottomNavigationAction
                        label="stackoverflow"
                        value="stackoverflow"
                        icon={StackOverflowIcon}
                        sx={{
                            color: textPrimary,
                            "&:hover": {
                                color: hover,
                                cursor: "pointer",
                            },
                        }}
                    />
                </a>
            </BottomNavigation>
        </FlexStyling>
    );
};

export default Footer;
