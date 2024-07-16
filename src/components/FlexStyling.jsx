import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { background } from "../../theme.js";

// reusable box with styling to easily change colour and opacity
const FlexStyling = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: background,
    opacity: 0.9,
});

export default FlexStyling;
