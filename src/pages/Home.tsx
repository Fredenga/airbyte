import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
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
      </main>
    </body>
  );
};

export default Home;
