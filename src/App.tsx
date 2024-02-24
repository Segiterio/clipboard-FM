import "./App.css";
import About from "./components/about";
import Access from "./components/access";
import Feature from "./components/feature";
import Footer from "./components/footer";
import Hero from "./components/hero/index";
import Last from "./components/last";
import Partners from "./components/partners/partners";

function App() {
  return (
    <>
      <div id="hero">
        <Hero />
        <Feature />
        <Access />
        <About />
        <Partners />
        <Last /> FAQs Contact Us Privacy Policy Press
        Kit Install Guide
      </div>
      <Footer />
      {/* <footer>
       

        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Akash kumar</a>.
        </p>
      </footer> */}
    </>
  );
}

export default App;
