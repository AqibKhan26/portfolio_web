// @mui icons
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// Material Kit 2 PRO React examples
import CenteredFooter from "../../examples/Footers/CenteredFooter";

function Footer() {
  const company = {};
  const links = [
  ];
  const socials = [
    { icon: <LinkedIn fontSize="small" />, link: "https://linkedin.com/in/aqibkhan026/" },

    { icon: <GitHubIcon fontSize="small" />, link: "https://github.com/Aqibkhan26" },
  ];

  return <CenteredFooter company={company} links={links} socials={socials} />;
}

export default Footer;