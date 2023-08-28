// import { StickyNavbar,Home,Work,About,Contact } from './Components'
import Home from './Components/Home/Home'
import StickyNavbar from './Components/StickyNavbar/StickyNavbar'
import About from './Components/About/About'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'


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