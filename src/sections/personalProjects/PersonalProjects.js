// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";

// Material Kit 2 PRO React examples
import RotatingCard from "../../examples/Cards/RotatingCard";
import RotatingCardFront from "../../examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../../examples/Cards/RotatingCard/RotatingCardBack";

// Images
import solstice from "../../assets/images/solsticeLogo.jpeg";
import newsPaperBg from "../../assets/images/newsPaperBg.jpg";
import waterSpoutWallet from "../../assets/images/WaterSpoutWallet.jpeg";
import wwwBg from "../../assets/images/wwwBg.jpg";
import uproar from "../../assets/images/uproar.jpeg";
import uproarBg from "../../assets/images/uproarBg.jpg";

function PersonalProjects() {
    return (
        <MKBox component="section" py={6}>
            <Container>
                <Grid
                    container
                    item
                    xs={12}
                    lg={8}
                    flexDirection="column"
                    textAlign="center"
                    mx="auto"
                    mb={3}
                >
                    <MKTypography variant="h1" mb={1}>
                        <u>Personal Projects</u>
                    </MKTypography>
                </Grid>
                <Grid container spacing={2} mt={4}>
                    <Grid item xs={10} md={8} lg={4}>
                        <RotatingCard>
                            <RotatingCardFront
                                image={solstice}/>
                            <RotatingCardBack
                                image={newsPaperBg}
                                title="SOLSTICE"
                                description="Solstice is a news agency business appication made using Java Applets. It provides users with faciclites to document and track subscriptions, Write and organize articles using the built in editor and much more.."
                            />
                        </RotatingCard>
                    </Grid>
                    <Grid item xs={10} md={8} lg={4}>
                        <RotatingCard>
                            <RotatingCardFront
                                image={waterSpoutWallet}
                            />
                            <RotatingCardBack
                                image={wwwBg}
                                title="WATER SPOUT WALLET"
                                description="WaterSpout Wallet was a mock crypto trading platform built with C++ to demonstrate the power of the Reverse Indexing Algorithm of file structures."
                            />
                        </RotatingCard>
                    </Grid>
                    <Grid item xs={10} md={8} lg={4}>
                        <RotatingCard>
                            <RotatingCardFront
                                image={uproar} />
                            <RotatingCardBack
                                image={uproarBg}
                                title="UPROAR"
                                description="Uproar is a music themed social networking platform that lets Users post textual/Image based content, upvote or downvote other posts
                                and also Comment/Reply to posts or other comments."
                            />
                        </RotatingCard>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default PersonalProjects;