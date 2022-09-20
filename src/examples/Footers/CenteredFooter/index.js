/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import "./footer.css"

// @mui material components
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// @mui icons


// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKTypography from "../../../components/MKTypography";
import logo from "../../../assets/images/logoTab.png"

function CenteredFooter({ company, links, socials, light }) {

  const renderLinks = links.map((link) => (
    <MKTypography
      key={link.name}
      component={Link}
      href={link.href}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {link.name}
    </MKTypography>
  ));

  const renderSocials = socials.map((social) => (
    <MKTypography
      key={social.link}
      component={Link}
      href={social.link}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {social.icon}
    </MKTypography>
  ));

  return (
    <MKBox component="footer" py={6}>
      {/* <Grid container xs={12} lg={8} sx={{ textAlign: "center" }} justifyContent="center">
        <Grid className="aqibLogo" sx={{ textAlign: "center" }}>
        <MKTypography variant="body2" color={light ? "white" : "secondary"}>
          <span className="madeBy">Made by</span>
        </MKTypography>
        <MKBox component="img" src={logo} alt="Aqib Khan" title="Aqib Khan" width="100px" opacity={0.9} justifyContent="center  "/>
        </Grid>
        <MKTypography variant="body2" color={light ? "white" : "secondary"}>
          <MKTypography
            component={Link}
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color={light ? "white" : "secondary"}
          >
          </MKTypography>
          .
        </MKTypography>
      </Grid> */}
      <Grid container justifyContent="center">
        <MKTypography variant="body2" color={light ? "white" : "secondary"}>
          <span className="madeBy">Made by</span>
        </MKTypography>
      </Grid>
      <Grid container justifyContent="center">
        <MKBox component="img" src={logo} alt="Aqib Khan" title="Aqib Khan" width="100px" opacity={0.9} justifyContent="center  " />
        <div className="logoNameDiv">
          <span className="logoName">Aqib Khan</span>
        </div>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
            {renderSocials}
          </Stack>
        </Grid>
      </Grid>
    </MKBox>
  );
}


// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
  socials: PropTypes.arrayOf(PropTypes.object),
  light: PropTypes.bool,
};

export default CenteredFooter;  
