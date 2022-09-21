/**
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

// @mui material components
import Card from "@mui/material/Card";

// Otis Kit PRO components
import MKBox from "../../../../components/MKBox";
import sapLabs from "../../../../assets/images/sapLabs.png"

function DefaultBackgroundCard({ image, label, title, description, action }) {
  return (
    <Card
      sx={({
        functions: { rgba, linearGradient },
        palette: { black },
        borders: { borderRadius },
      }) => ({
        backgroundImage: `${linearGradient(
          rgba(black.main, 0),
          rgba(black.main, 0)
        )}, url(${sapLabs})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: borderRadius.xl,
      })}
    >
      <MKBox textAlign="center" pt={25} pb={3} px={3}>

      </MKBox>
    </Card>
  );
}

// Setting default values for the props of DefaultBackgroundCard
DefaultBackgroundCard.defaultProps = {
  label: "",
};

// Typechecking props for the DefaultBackgroundCard
DefaultBackgroundCard.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default DefaultBackgroundCard;