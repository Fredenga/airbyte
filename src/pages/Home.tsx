import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <body>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <AboutUs />
      </main>
    </body>
  );
};

export default Home;
