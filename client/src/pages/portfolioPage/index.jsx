import { Box, Grid, useMediaQuery } from "@mui/material";
import FlexStyling from "../../components/FlexStyling";
import { textPrimary } from "../../../theme";
import Project from "../../components/Project";
import { useEffect } from "react";

export default function Portfolio() {
    useEffect(() => {
        document.title = "JSN - Portfolio";
    }, []);

    const isMobileScreens = useMediaQuery("(max-width: 800px");
    const isTabletScreens = useMediaQuery("(max-width: 1300px");

    const projects = [
        {
            key: 1,
            title: "Investor Dashboard",
            technology: "Coming Soon, MERN Stack, Material UI",
            repository: "https://github.com/Jiske-N?tab=repositories",
            screenshot:
                "src/assets/investor-dashboard-placeholder-screenshot.png",
            deployment: "https://awesome-foursome.github.io/boardgame-bliss/",
        },
        {
            key: 2,
            title: "Task Master",
            technology: "Node, Express, Handlebars, Sequelize, Postgres",
            repository: "https://github.com/Jiske-N/Task-Manager",
            screenshot: "src/assets/taskmaster.png",
            deployment:
                "https://awesome-foursome.github.io/boardgame-bliss/chess-page.html",
        },
        {
            key: 3,
            title: "Board Game Bliss",
            technology: "HTML, CSS, Javascript, Bulma, Third Party API's",
            repository: "https://github.com/awesome-foursome/boardgame-bliss",
            screenshot: "src/assets/boardgame-bliss-screenshot.png",
            deployment: "https://awesome-foursome.github.io/boardgame-bliss/",
        },
        {
            key: 4,
            title: "Tech Blog",
            technology: "Node, Express, Handlebars, Sequelize, Bootstrap",
            repository: "https://github.com/Jiske-N/tech-blog",
            screenshot: "src/assets/tech-blog-screenshot.png",
            deployment:
                "https://awesome-foursome.github.io/boardgame-bliss/rules-page.html",
        },
        {
            key: 5,
            title: "Social Network API Back-End",
            technology: "Node, Express, Mongoose",
            repository: "https://github.com/Jiske-N/noSQL-SocialNetworkAPI",
            screenshot: "src/assets/social-network-api-screenshot.png",
            deployment:
                "https://awesome-foursome.github.io/boardgame-bliss/other-games.html",
        },
    ];

    return (
        <>
            <Grid width="100%" container spacing={2}>
                {projects.map((project) => (
                    <>
                        {/* desktop view */}
                        {!isTabletScreens && !isMobileScreens && (
                            <Grid key={project.key} item xs={4}>
                                <FlexStyling
                                    color={textPrimary}
                                    margin="5%"
                                    borderRadius="0.2rem"
                                    style={{ alignItems: "flex-start" }}
                                    boxSizing="border-box"
                                >
                                    <Box margin="1% 1.5%" minWidth="97%">
                                        <Project {...project} />
                                    </Box>
                                </FlexStyling>
                            </Grid>
                        )}

                        {/* tablet view */}
                        {isTabletScreens && !isMobileScreens && (
                            <Grid key={project.key} item xs={6}>
                                <FlexStyling
                                    color={textPrimary}
                                    margin="10%"
                                    borderRadius="0.2rem"
                                    flexDirection="column"
                                    style={{ alignItems: "flex-start" }}
                                    // width="80%"
                                    boxSizing="border-box"
                                >
                                    <Box margin="1% 1.5%" minWidth="97%">
                                        <Project {...project} />
                                    </Box>
                                </FlexStyling>
                            </Grid>
                        )}

                        {/* mobile view */}
                        {isMobileScreens && (
                            <Grid
                                key={project.key}
                                item
                                xs={12}
                                marginBottom="10%"
                            >
                                <FlexStyling
                                    color={textPrimary}
                                    margin="10% 10% 0 10%"
                                    borderRadius="0.2rem"
                                    flexDirection="column"
                                    style={{ alignItems: "flex-start" }}
                                    boxSizing="border-box"
                                >
                                    <Box margin="1% 1.5%" minWidth="97%">
                                        <Project {...project} />
                                    </Box>
                                </FlexStyling>
                            </Grid>
                        )}
                    </>
                ))}
            </Grid>
        </>
    );
}
