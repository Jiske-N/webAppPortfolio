import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FlexStyling from "./FlexStyling";
import { hover, textPrimary } from "../../theme.js";
import Navigation from "./Navigation.jsx";

const Header = () => {
    const navigate = useNavigate();

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
            <Navigation />
        </FlexStyling>
    );
};

export default Header;
