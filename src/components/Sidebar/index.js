import './index.scss'
import {Link} from 'react-router-dom'
import LogoS from '../../assets/images/Man-with-computer.png'
import man_png from '../../assets/images/man.png'
import Logo_resume from '../../assets/images/Resume_png.png'
import { useState } from 'react'
import Sidebar_errow from '../../assets/images/sidebar_errow.png'


const Sidebar = () =>{

    const [showNavbar , setShowNav] = useState(true);

    return (
        <>
        <div className={showNavbar?"nav-bar max_navbar_height":"nav-bar min_navbar_height"}    >
        <center>
        <button onClick={() => setShowNav(!showNavbar)} > <img src ={Sidebar_errow} /> </button>

    { showNavbar?<Link className="options" to="/">
            <Link className="option" to="/"><img src={LogoS} alt="Logo" />Home Page</Link>
            <Link className="option" to="/Resume" ><img src={Logo_resume} /> Resume</Link>
            <Link className="option" to="/About"><img src={man_png} /> About me</Link>
            <Link className="option" to="/Handles" >Handles</Link>
        </Link>:null}
        </center>
    </div>
    </>
)
}
export default Sidebar