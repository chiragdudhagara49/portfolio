// import { StickyNavbar,Home,Work,About,Contact } from './Components'
import Home from './Components/Home/Home'
import StickyNavbar from './Components/StickyNavbar/StickyNavbar'
import About from './Components/About/About'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'
import ScrollToTop from './Components/xyz/ScrollToTop'


function App() {
  return (
    <div>
    <StickyNavbar />
    <ScrollToTop />

      <Home />
      <About />
      <Work />
      <Contact />
    </div>

  );
}

export default App;