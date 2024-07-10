import { useState } from "react";
import { Typography, useMediaQuery, MenuItem, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useLocation, useNavigate, Link } from "react-router-dom";
import FlexStyling from "./FlexStyling";
import { hover, textPrimary } from "../../theme.js";

const Navigation = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const navigate = useNavigate();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px");
    const currentPage = useLocation().pathname;
    // const ref = React.useRef();
    const open = Boolean(isMobileMenuToggled);
    const handleClick = (event) => {
        setIsMobileMenuToggled(event.currentTarget.parentElement);
    };
    const handleClose = () => {
        setIsMobileMenuToggled(!isMobileMenuToggled);
    };

    return (
        <FlexStyling padding="1.2rem 6%">
            <FlexStyling gap="1.75rem">
                <Typography
                    fontWeight="bold"
                    // clamp sets a minimum, preferred and maximum font size - can be used for width as well
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color={textPrimary}
                    onClick={() => navigate("/")}
                    sx={{
                        "&:hover": {
                            color: hover,
                            cursor: "pointer",
                        },
                    }}
                >
                    Jiske-N
                </Typography>
            </FlexStyling>
            {/* desktop nav */}
            {isNonMobileScreens && (
                <FlexStyling gap="2rem">
                    <MenuItem
                        onClick={() => navigate("/about")}
                        sx={{
                            color: textPrimary,
                            fontWeight: "bold",
                            textDecoration:
                                currentPage === "/about" ? "underline" : "none",
                            "&:hover": {
                                color: hover,
                                cursor: "pointer",
                            },
                        }}
                    >
                        About
                    </MenuItem>
                    <MenuItem
                        onClick={() => navigate("/portfolio")}
                        sx={{
                            color: textPrimary,
                            fontWeight: "bold",
                            textDecoration:
                                currentPage === "/portfolio"
                                    ? "underline"
                                    : "none",
                            "&:hover": {
                                color: hover,
                                cursor: "pointer",
                            },
                        }}
                    >
                        Portfolio
                    </MenuItem>
                    <MenuItem
                        onClick={() => navigate("/contact")}
                        sx={{
                            color: textPrimary,
                            fontWeight: "bold",
                            textDecoration:
                                currentPage === "/contact"
                                    ? "underline"
                                    : "none",
                            "&:hover": {
                                color: hover,
                                cursor: "pointer",
                            },
                        }}
                    >
                        Contact
                    </MenuItem>
                    <MenuItem
                        onClick={() => navigate("/resume")}
                        sx={{
                            color: textPrimary,
                            fontWeight: "bold",
                            textDecoration:
                                currentPage === "/resume"
                                    ? "underline"
                                    : "none",
                            "&:hover": {
                                color: hover,
                                cursor: "pointer",
                            },
                        }}
                    >
                        Resume
                    </MenuItem>
                </FlexStyling>
            )}

            {!isNonMobileScreens && (
                <div>
                    {/* <div ref={ref}> */}
                    {isMobileMenuToggled ? (
                        <MenuOpenIcon
                            onClick={handleClick}
                            sx={{
                                "&:hover": {
                                    hover,
                                    cursor: "pointer",
                                },
                            }}
                        />
                    ) : (
                        <MenuIcon
                            onClick={handleClick}
                            sx={{
                                "&:hover": {
                                    hover,
                                    cursor: "pointer",
                                },
                            }}
                        />
                    )}
                </div>
            )}

            {!isNonMobileScreens && isMobileMenuToggled && (
                <Menu
                    anchorEl={isMobileMenuToggled}
                    open={open}
                    onClose={handleClose}
                >
                    <Link to="/about">
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                fontWeight: "bold",
                                color: textPrimary,
                                textDecoration:
                                    currentPage === "/contact"
                                        ? "underline"
                                        : "none",
                                "&:hover": {
                                    color: hover,
                                    cursor: "pointer",
                                },
                            }}
                        >
                            About
                        </MenuItem>
                    </Link>
                    <Link to="/portfolio">
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                fontWeight: "bold",
                                color: textPrimary,
                                textDecoration:
                                    currentPage === "/resume"
                                        ? "underline"
                                        : "none",
                                "&:hover": {
                                    color: "#15253D",
                                    cursor: "pointer",
                                },
                            }}
                        >
                            Portfolio
                        </MenuItem>
                    </Link>
                    <Link to="/contact">
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                fontWeight: "bold",
                                color: textPrimary,
                                textDecoration:
                                    currentPage === "/contact"
                                        ? "underline"
                                        : "none",
                                "&:hover": {
                                    color: "#15253D",
                                    cursor: "pointer",
                                },
                            }}
                        >
                            Contact
                        </MenuItem>
                    </Link>
                    <Link to="/resume">
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                fontWeight: "bold",
                                color: textPrimary,
                                textDecoration:
                                    currentPage === "/resume"
                                        ? "underline"
                                        : "none",
                                "&:hover": {
                                    color: "#15253D",
                                    cursor: "pointer",
                                },
                            }}
                        >
                            Resume
                        </MenuItem>
                    </Link>
                </Menu>
            )}
        </FlexStyling>
    );
};

export default Navigation;
