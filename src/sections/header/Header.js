import { useEffect, useRef } from "react";

// typed-js
import * as Typed from "typed.js";
import "./header.css"

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "../../components/MKBox";
import MKButton from "../../components/MKButton";
import MKTypography from "../../components/MKTypography";

// Images
import bgImage from "../../assets/videos/bgVideo_3.gif";

function Header() {

  const typedJSRef = useRef(null);

  // Setting up typedJS
  useEffect(() => {
    const typedJS = new Typed(typedJSRef.current, {
      strings: ["Full-Stack Developer", "DevOps Engineer", "Machine Learning Enthusiast"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });

    return () => typedJS.destroy();
  }, []);


  document.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    const about = document.querySelector("section.about");
    const tech = document.querySelector("section.technologies");
    const projects = document.querySelector("section.projects");
    const contact = document.querySelector("section.contact");
    const aboutNav = document.querySelector("div.aboutNavLink");
    const homeNav = document.querySelector("div.headerNavLink");
    const techNav = document.querySelector("div.techNavLink");
    const projectNav = document.querySelector("div.projectNavLink");
    const contactNav = document.querySelector("div.contactNavLink");

    const distanceFromTopSectionAbout =
      about.getBoundingClientRect().top;
    const distanceFromTopSectionTech =
    tech.getBoundingClientRect().top;
    const distanceFromTopSectionProjects =
    projects.getBoundingClientRect().top;
    const distanceFromTopSectionContact =
    contact.getBoundingClientRect().top;

    //Navbar fix condition
    if (distanceFromTopSectionAbout < 40) {
      navbar.classList.add("fixed-top");
    }
    else {
      navbar.classList.remove("fixed-top");
    }
    if (distanceFromTopSectionAbout < 100 && distanceFromTopSectionTech > 10 && distanceFromTopSectionProjects > 10 && distanceFromTopSectionContact > 10) {
      homeNav.classList.remove("active");
      aboutNav.classList.add("active");
      techNav.classList.remove("active");
      projectNav.classList.remove("active");
      contactNav.classList.remove("active");
    }
    else if (distanceFromTopSectionTech < 0 && distanceFromTopSectionAbout < 20 && distanceFromTopSectionProjects > 10 && distanceFromTopSectionContact > 10) {
      homeNav.classList.remove("active");
      aboutNav.classList.remove("active");
      techNav.classList.add("active");
      projectNav.classList.remove("active");
      contactNav.classList.remove("active");
    }
    else if (distanceFromTopSectionTech < 0 && distanceFromTopSectionAbout < 10 && distanceFromTopSectionProjects < 10 && distanceFromTopSectionContact > 10) {
      homeNav.classList.remove("active");
      aboutNav.classList.remove("active");
      techNav.classList.remove("active");
      projectNav.classList.add("active");
      contactNav.classList.remove("active");
    }
    else if (distanceFromTopSectionTech < 0 && distanceFromTopSectionAbout < 10 && distanceFromTopSectionProjects < 10 && distanceFromTopSectionContact < 10) {
      homeNav.classList.remove("active");
      aboutNav.classList.remove("active");
      techNav.classList.remove("active");
      projectNav.classList.remove("active");
      contactNav.classList.add("active");
    }
    else {
      homeNav.classList.add("active");
      aboutNav.classList.remove("active");
      techNav.classList.remove("active");
      projectNav.classList.remove("active");
      contactNav.classList.remove("active");
    }
  });

  const showMobileMenu = (e) => {
    e.preventDefault();
    const navbar = document.querySelector("nav");
    const navDiv = document.querySelector("div.link-wrap");

    if (navDiv.className === "link-wrap") {
      navDiv.classList.add("mobile");
      navbar.classList.add("mobile");
    } else {
      navDiv.classList.remove("mobile");
      navbar.classList.remove("mobile");
    }
  }


  return (
    <>
      <MKBox component="header" position="relative">
        <MKBox
          display="flex"
          alignItems="center"
          minHeight="100vh"
          sx={{
            backgroundImage: () => `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* <video className='videoTag' autoPlay loop muted>
            <source src={bgVideo} type='video/mp4' />
          </video> */}
          <Container>
            <Grid
              container
              item
              xs={12}
              lg={8}
              flexDirection="column"
              justifyContent="center"
              alignItems="left"
              textAlign="left"
              mx="auto"
            >
              <MKTypography
                variant="h1"
                color="black"
                mt={1} mb={6}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                <span>Hello, I'm </span>
                <span className="highlitedText">Aqib Khan.</span>
                <br />
                <span> I'm a </span>
                <span ref={typedJSRef} className="highlitedText" />
              </MKTypography>
              <a className="navLink" href="#about">
                <MKButton variant="outlined" color="black" className="buttonMain">View My Work</MKButton></a>
            </Grid>
          </Container>
        </MKBox>
        <nav className="flex desk">
          <i className="menuMd fa-solid fa-bars" onClick={showMobileMenu}></i>
          <div className="link-wrap">
            <div className="page-link headerNavLink" ><a className="navLink" href="#header">Home</a></div>
            <div className="page-link aboutNavLink" ><a className="navLink" href="#about">about</a></div>
            <div className="page-link techNavLink" ><a className="navLink" href="#technologies">technologies</a></div>
            <div className="page-link projectNavLink" ><a className="navLink" href="#projects">projects</a></div>
            <div className="page-link contactNavLink" ><a className="navLink" href="#contact">contact</a></div>
          </div>
        </nav>
      </MKBox>
    </>
  );
}

export default Header;