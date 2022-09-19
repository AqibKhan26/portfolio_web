// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";

// Material Kit 2 PRO React examples
import SimpleInfoCard from "../../examples/Cards/InfoCards/SimpleInfoCard";

function About() {
    return (
        <MKBox component="section" py={12}>
            <Container>
                <Grid
                    container
                    item
                    xs={18}
                    lg={6}
                    justifyContent="center"
                    mx="auto"
                    textAlign="center"
                    pb={6}
                >
                    <MKTypography variant="h1" mb={1} pb={2}>
                        <u>Know Me Better !</u>
                    </MKTypography>
                    <MKTypography variant="body1" color="text">
                        A driven problem-solver, I have worked in the software scene for three years. Collaborating with talented individuals
                        around the globe, creating digital products for businesses and consumers. I'm confident, curious, and committed to upskilling 
                        myself one problem at a time.
                    </MKTypography>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4}>
                        <SimpleInfoCard
                            color="primary"
                            icon="fa-solid fa-medal"
                            title="Leader"
                            description="Founded and shaped several successful projects, creating and maintaining the
                            vision, roadmap and backlog of work throughout their life cycles"
                            direction="center"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <SimpleInfoCard
                            color="secondary"
                            icon="fa-solid fa-lightbulb"
                            title="Innovative"
                            description="Proposed and realized novel solutions for multiple critical business and healthcare use cases"
                            direction="center"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <SimpleInfoCard
                            icon="fa-solid fa-star"
                            title="Motivated"
                            description="Consistently excelled at any tasks assigned. Translating requirements to
                            tangible features and deliverables"
                            direction="center"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <SimpleInfoCard
                            color="warning"
                            icon="fa-solid fa-rocket"
                            title="Self-Starter"
                            description="Proposed, Designed and Developed several applications at previous workplace and institutions"
                            direction="center"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <SimpleInfoCard
                            color="success"
                            icon="fa-solid fa-person-chalkboard"
                            title="Mentor"
                            description="Mentored and Trained several new recruits at the workplace as well as graduating students during their capstone projects"
                            direction="center"
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <SimpleInfoCard
                            color="dark"
                            icon="fa-solid fa-truck-fast"
                            title="Quick Learner"
                            description="Adept at learning and prioritizing new tasks and assignments"
                            direction="center"
                        />
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default About;