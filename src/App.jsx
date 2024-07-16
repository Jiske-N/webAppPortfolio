import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

function App() {
    return (
        // added this box to add flex column to push the footer to the bottom of the page.
        // is it bad practice to have main within a div rather than directly within the body?
        <Box
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Header />
            {/* take up remaining view height if less than full */}
            <main style={{ flex: "1" }}>
                <Outlet />
            </main>
            <Footer />
        </Box>
    );
}

export default App;
