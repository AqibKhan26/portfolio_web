// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack"

// Material Kit 2 PRO React components
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultBackgroundCard from "../../examples/Cards/BackgroundCards/DefaultBackgroundCard";

import AboutUsOption from "../../pages/LandingPages/Coworking/components/AboutUsOption";

// HelpCenter page components

// Images
import bgImage1 from "../../assets/images/rotating-card-bg-front.jpeg";

function ProfessionalProjects() {
    return (
        <MKBox component="section" py={12}>
            <Container>
                <Grid
                    container
                    item
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    xs={10}
                    lg={5}
                    sx={{ mx: "auto", textAlign: "center" }}
                >
                    <MKTypography variant="h1" mb={1}>
                        <u>Professional Projects</u>
                    </MKTypography>
                </Grid>
                <Grid container spacing={0} alignItems="center" sx={{ mt: 6 }}>
                    <Grid item xs={12} md={16} lg={4} sx={{ ml: "auto" }}>
                        <DefaultBackgroundCard
                            image={bgImage1}
                            label="website visitors"
                            title="The Best Productivity Apps on Market"
                            description="As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others."
                            action={{
                                type: "internal",
                                route: "/pages/support/help-center",
                                label: "get started",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={14} lg={6} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
                        <Grid item xs={12} lg={8} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
                            <Stack>
                                <AboutUsOption
                                    icon="fa-solid fa-1"
                                    content={
                                        <>
                                            <b> Business Network Convergence :</b>
                                            <br />
                                            Engaged in the development of the replication framework allowing data to be processed and
                                            replicated across data centres
                                        </>
                                    }
                                />
                                <AboutUsOption
                                    icon="fa-solid fa-2"
                                    content={
                                        <>
                                            <b>Devops, Business Network Convergence :</b>
                                            <br />
                                            Member of a 10-person team organizing and orchestrating the cloud infrastructure for 7
                                            full-fledged development teams, Upholding stringent service level agreements with our clients
                                        </>
                                    }
                                />
                                <AboutUsOption
                                    icon="fa-solid fa-3"
                                    content={
                                        <>
                                            <b>Lead Software Developer, Digital Aged Care-Data Intelligence team:</b>
                                            <br />
                                            Undertook the enhancement of the digital care platforms UI. Designed and led the development of multiple data intensive ML Models and applications.
                                        </>
                                    }
                                />
                                <AboutUsOption
                                    icon="fa-solid fa-4"
                                    content={
                                        <>
                                            <b>Associate Software Developer, Data Transformation - Logistics 2 :</b>
                                            <br />
                                            Coordinated revamp of the existing support process by deploying chatbots positioned at the
                                            customers’ end using RPA and SAP Conversational AI and successgully reduced customer incident turnaround time to 5-7 minutes for 65% of customer-reported
                                            incidents
                                        </>
                                    }
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default ProfessionalProjects;