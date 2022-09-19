/*
=========================================================
* Otis Kit PRO - v2.0.1
=========================================================
* Product Page: https://material-ui.com/store/items/otis-kit-pro-material-kit-react/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
 =========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Otis Kit PRO components
import MKBox from "../../../../components/MKBox";
import MKTypography from "../../../../components/MKTypography";

function SimpleInfoCard({ color, icon, title, description, direction }) {
  let alignment = "flex-start";

  if (direction === "center") {
    alignment = "center";
  } else if (direction === "right") {
    alignment = "flex-end";
  }

  return (
    <MKBox
      display="flex"
      flexDirection="column"
      alignItems={alignment}
      textAlign={direction}
      p={direction === "center" ? 2 : 0}
      lineHeight={1}
    >
      <MKBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="6rem"
        height="6rem"
        borderRadius="xl"
        variant="gradient"
        color="white"
        bgColor={color}
        coloredShadow={color}
      >
        <i className={icon}></i>
      </MKBox>
      <MKTypography display="block" variant="5" fontWeight="bold" mt={2.5} mb={1.5}>
        {title}
      </MKTypography>
      <MKTypography display="block" variant="body2" color="text">
        {description}
      </MKTypography>
    </MKBox>
  );
}

// Setting default props for the SimpleInfoCard
SimpleInfoCard.defaultProps = {
  color: "info",
  direction: "left",
};

// Typechecking props for the SimpleInfoCard
SimpleInfoCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(["left", "right", "center"]),
};

export default SimpleInfoCard;