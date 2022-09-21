/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
 =========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for type checking of props
import PropTypes from "prop-types";


// Material Kit 2 PRO React components
import MKBox from "../../../../../components/MKBox";
import MKTypography from "../../../../../components/MKTypography";

function AboutUsOption({ icon, content }) {
  return (
    <MKBox display="flex" alignItems="center" p={2}>
      {/* <MKBox
        width="50px"
        height="50px"
        variant="gradient"
        bgColor="info"
        color="white"
        coloredShadow="info"
        display="grid"
        alignItems="center"
        justifyContent="center"
        borderRadius="xl"
      >
        <i className={icon} ></i>
      </MKBox> */}
      <MKTypography variant="body2" color="text" pl={2}>
        {content}
      </MKTypography>
    </MKBox>
  );
}

// Typechecking props for the AboutUsOption
AboutUsOption.propTypes = {
  icon: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default AboutUsOption;