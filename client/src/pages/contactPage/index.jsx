import Form from "../../components/Form";
import FlexStyling from "../../components/FlexStyling";
import { useMediaQuery } from "@mui/material";

export default function Contact() {
    const isNonMobileScreens = useMediaQuery("(min-width: 1200px");

    return (
        <FlexStyling
            margin="5%"
            borderRadius="0.2rem"
            style={isNonMobileScreens ? { width: "45%" } : { width: "auto" }}
        >
            <Form />
        </FlexStyling>
    );
}
