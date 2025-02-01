import BioFooter from "../components/BioFooter";
import BioMiddle from "../components/BioMiddle";
import BioTop from "../components/BioTop";
import Navbar from "../components/Navbar";

const Bio = () => {
  return (
    <body>
      <header>
        <Navbar />
      </header>
      <main>
        <BioTop />
        <BioMiddle />
      </main>
      <footer>
        <BioFooter />
      </footer>
    </body>
  );
};

export default Bio;
