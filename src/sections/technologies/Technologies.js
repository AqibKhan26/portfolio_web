// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import "./technologies.css"

// Material Kit 2 PRO React components
import MKBox from "../../components/MKBox";
import MKTypography from "../../components/MKTypography";

// Images
import c from "../../assets/images/logos/lang-logos/c.svg";
import cpp from "../../assets/images/logos/lang-logos/cpp.svg";
import java from "../../assets/images/logos/lang-logos/java.svg";
import javascript from "../../assets/images/logos/lang-logos/javascript.svg";
import kotlin from "../../assets/images/logos/lang-logos/kotlin.svg";
import ui5 from "../../assets/images/logos/lang-logos/ui5.svg";
import node from "../../assets/images/logos/lang-logos/node.svg";
import python from "../../assets/images/logos/lang-logos/python.svg";
import react from "../../assets/images/logos/lang-logos/react.svg";


function Technologies() {
  return (
    <MKBox py={6}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={8}
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h1" mb={1}>
            <u>Technologies I Can Work On</u>
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid className="logos" item xs={6} md={4} lg={1.2}>
            <MKBox component="img" src={c} alt="c" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={6} md={4} lg={1.2}>
            <MKBox component="img" src={cpp} alt="cpp" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={6} md={4} lg={1.2}>
            <MKBox component="img" src={java} alt="java" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={6} md={4} lg={1.2}>
            <MKBox component="img" src={javascript} alt="javascript" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={6} md={4} lg={1.2}>
            <MKBox component="img" src={kotlin} alt="kotlin" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={6} md={4} lg={1.2}>
            <MKBox component="img" src={ui5} alt="ui5" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={6} md={4} lg={1.2}>
            <MKBox component="img" src={node} alt="node" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={6} md={4} lg={1.2}>
            <MKBox component="img" src={python} alt="ui5" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={6} md={4} lg={1.2}>
            <MKBox component="img" src={react} alt="ui5" width="100%" opacity={0.9} />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Technologies;