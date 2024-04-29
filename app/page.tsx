import About from "./components/About";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Facts from "./components/Facts";

const Home = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <About />
      <Biography />
      <Gallery />
      <Facts />
      <Footer />
    </div>
  );
};

export default Home;
