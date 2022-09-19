
import Header from './sections/header/Header';

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "./assets/theme";
import About from './sections/about/About';


function App() {

  // window.addEventListener('scroll', (e) => {

  //   // get all sections on the page
  //   const sections = document.querySelectorAll('section');
  //   const nav = document.querySelectorAll('nav');

  //   // loop through each section
  //   sections.forEach(section => {

  //     // get px distance from top
  //     const topDistance = section.getBoundingClientRect().top;

  //     // if the distance to the top is between 0-100px
  //     if (topDistance > 0 && topDistance < 100) {
  //       nav.classList.add('active');

  //       // otherwise, remove the class
  //     } else {
  //       nav.classList.remove('active');
  //     }
  //   });
  // });
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <section className="header" id='header'>
      <Header />
    </section>
    <section className="about" id='about'>
      <About />
    </section>
  </ThemeProvider>
  );
}

export default App;
