import { Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import FlexStyling from "./FlexStyling";
import { textPrimary } from "../../theme";
import { validateEmail } from "../utils/helpers";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [isValid, setIsValid] = useState(false);

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "name") {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }

        if (!name || !email || !message) {
            setErrorMessage("Please ensure all fields are filled in correctly");
            setIsValid(false);
            return;
        } else if (!validateEmail(email)) {
            setErrorMessage("Please ensure email address is valid");
            setIsValid(false);
            return;
        } else {
            setErrorMessage(" ");
            setIsValid(true);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert(`Thanks ${name} ${email}, this form does nothing!`);

        setName("");
        setMessage("");
        setEmail("");
        setIsValid(false);
    };

    return (
        <FlexStyling sx={{ width: "100%" }} margin="1.2rem 4%">
            <form style={{ width: "100%" }} onSubmit={handleFormSubmit}>
                <Typography
                    sx={{
                        color: textPrimary,
                        fontSize: "1.8rem",
                        fontWeight: "bold",
                    }}
                >
                    Contact
                </Typography>
                <Typography
                    sx={{
                        color: textPrimary,
                        fontSize: "1.2rem",
                        margin: "1rem 0",
                    }}
                >
                    Name:
                </Typography>
                <TextField
                    fullWidth
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <Typography
                    sx={{
                        color: textPrimary,
                        fontSize: "1.2rem",
                        margin: "1rem 0",
                    }}
                >
                    Email address:
                </Typography>
                <TextField
                    fullWidth
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                />
                <Typography
                    sx={{
                        color: textPrimary,
                        fontSize: "1.2rem",
                        margin: "1rem 0",
                    }}
                >
                    Message:
                </Typography>
                <TextField
                    fullWidth
                    multiline
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                />
                <Typography
                    sx={{
                        color: textPrimary,
                        fontSize: "1.2rem",
                        margin: "1rem 0",
                    }}
                >
                    {errorMessage && (
                        <Typography
                            sx={{
                                color: textPrimary,
                                fontSize: "1.2rem",
                                margin: "1rem 0",
                            }}
                        >
                            {errorMessage}
                        </Typography>
                    )}
                </Typography>
                <Button disabled={!isValid} type="submit" variant="contained">
                    Submit
                </Button>
            </form>
        </FlexStyling>
    );
};

export default Form;
