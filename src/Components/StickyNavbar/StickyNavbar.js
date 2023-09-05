import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";




function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-lato">
    <Link smooth to="/Home">Home</Link>
    <Link smooth to="/About">About</Link>
    <Link smooth to="/Work">Work</Link>
    <Link smooth to="/Contact">Contact</Link>
    </ul>
  );

  return (

    <Navbar className="rounded-[0px] sticky border-0 z-10 top-0 max-w-full py-2 px-4 lg:px-8 lg:py-4  bg-slate-900 backdrop-blur-2xl bg-opacity-60 backdrop-blur-md  ">

      <div className="flex items-center justify-between text-blue-gray-900 ">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1 font-medium text-[25px] font-kanit"  >
          MatrixTech
        </Typography>

        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>

          <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
     
    </Navbar>


  );
}

export default StickyNavbar;