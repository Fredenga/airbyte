import AboutUs from "../components/AboutUs";
import Charity from "../components/Charity";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import SummerTides from "../components/SummerTides";
import UpcomingEvents from "../components/UpcomingEvents";

const Home = () => {
  return (
    <body>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <AboutUs />
        <UpcomingEvents />
        <Partners />
        <SummerTides />
        <Charity />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
};

export default Home;
