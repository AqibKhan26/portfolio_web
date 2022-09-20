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
import express from "../../assets/images/logos/lang-logos/express.svg";
import firebase from "../../assets/images/logos/lang-logos/firebase.svg";
import git from "../../assets/images/logos/lang-logos/git.svg";
import gradle from "../../assets/images/logos/lang-logos/gradle.svg";
import groovy from "../../assets/images/logos/lang-logos/groovy.svg";
import pandas from "../../assets/images/logos/lang-logos/pandasLogo.svg";
import r from "../../assets/images/logos/lang-logos/r.svg";
import jenkins from "../../assets/images/logos/lang-logos/jenkins.svg";
import dots from "../../assets/images/logos/lang-logos/dots.svg";


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
        <Grid container spacing={5} sx={{ mt: 2 }}>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={c} alt="c" title="c" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={cpp} alt="cpp" title="cpp" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={java} alt="java" title="java" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={javascript} alt="javascript" title="javascript" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={kotlin} alt="kotlin" title="kotlin" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={ui5} alt="ui5" title="ui5" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={node} alt="node" title="node" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={python} alt="python" title="python" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={react} alt="react" title="react" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={express} alt="express" title="express" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={firebase} alt="firebase" title="firebase" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={git} alt="git" title="git" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={gradle} alt="gradle" title="gradle" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={groovy} alt="groovy" title="groovy" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <br/>
            <MKBox component="img" align-items="center" src={pandas} title="pandas" alt="pandas" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={r} alt="r" title="r" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1.3}>
            <MKBox component="img" src={jenkins} alt="jenkins" title="jenkins" width="100%" opacity={0.9} />
          </Grid>
          <Grid className="logos" item xs={3} md={3} lg={1}>
          <br/>
            <MKBox component="img" src={dots} alt="dots" title="and many more..." width="100%" opacity={0.9} />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Technologies;