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
    </body>
  );
};

export default Bio;
