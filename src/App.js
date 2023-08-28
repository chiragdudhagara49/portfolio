import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import StickyNavbar from "./Components/StickyNavbar";
import Work from "./Components/Work";

function App() {
  return (
    <div>
      <StickyNavbar />
      <Home />
      <Work />
      <About />
      <Contact />
    </div>

  );
}

export default App;