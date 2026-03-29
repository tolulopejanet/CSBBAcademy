import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhoWeAre from "./components/WhoWeAre";
import Gallery from "./components/Gallery";
import ProblemSolution from "./components/ProblemSolution";
import Programs from "./components/Programs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
        <WhoWeAre />
      <Stats />
    
      <Gallery />
      <ProblemSolution />
      <Programs />
      <CTA />
      <Footer />
    </>
  );
}

export default App;