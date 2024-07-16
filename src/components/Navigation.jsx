import { useState } from "react";
import { useMediaQuery, MenuItem, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useLocation, useNavigate, Link } from "react-router-dom";
import FlexStyling from "./FlexStyling";
import { hover, textPrimary } from "../../theme.js";

// not sure if I did this wrong and the project was asking for a navigation button set up similar to:
// the projectPage and project component or the proficiencies within the resumePage
const Navigation = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px");
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const open = Boolean(isMobileMenuToggled);

    const navigate = useNavigate();
    const currentPage = useLocation().pathname;

    const handleClick = (event) => {
        setIsMobileMenuToggled(event.currentTarget.parentElement);
    };

    const handleClose = () => {
        setIsMobileMenuToggled(!isMobileMenuToggled);
    };

    return (
        <>
            {/* desktop nav */}
            {isNonMobileScreens && (
                <FlexStyling gap="2rem">
                    <MenuItem
                        onClick={() => navigate("/")}
                        sx={{
                            color: textPrimary,
                            fontWeight: "bold",
                            textDecoration:
                                currentPage === "/" ? "underline" : "none",
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
                    <Link to="/">
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
        </>
    );
};

export default Navigation;
