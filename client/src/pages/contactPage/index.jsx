import Form from "../../components/Form";
import FlexStyling from "../../components/FlexStyling";
import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";

export default function Contact() {
    useEffect(() => {
        document.title = "JSN - Contact";
    }, []);

    const isNonMobileScreens = useMediaQuery("(min-width: 1200px");

    return (
        <FlexStyling
            margin="5%"
            borderRadius="0.2rem"
            style={isNonMobileScreens ? { width: "45.4%" } : { width: "auto" }}
        >
            <Form />
        </FlexStyling>
    );
}
