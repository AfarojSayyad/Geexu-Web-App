import Home from "../pages";
import Hero from "../pages/home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Navbar1 } from "./NavBar1";
// import NavBar from "./Nav";
// import Navbar from "./Navbar";

export default function Layout({children})
{
    return(
        <div>
            <Navbar/>
            {/* <Navbar1/> */}
             {children}
            {/* <Hero/> */}
            {/*<Footer/> */}
        </div>
    )
}
