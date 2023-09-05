// import { StickyNavbar,Home,Work,About,Contact } from './Components'
import Home from './Components/Home/Home'
import StickyNavbar from './Components/StickyNavbar/StickyNavbar'
import About from './Components/About/About'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='bg-black'>
      <StickyNavbar />
      <Home/>
      <About/>
      <Work/>
      <Contact/>
     
    </div>

  );
}

export default App;