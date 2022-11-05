import './index.scss'
import {Link , NewLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import Logo_resume from '../../assets/images/Resume_png.png'
import { useState } from 'react'


const Sidebar = () =>{

    const [showNevbar , setShowNav] = useState(false);

    return (

    <div className="nav-bar">
        <center>
        <Link className="logo" to="/" onClick={() => setShowNav(false)}>
            <img src={LogoS} alt="Logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>

        <Link className="options" to="/">
            <Link className="option" to="/Resume" ><img src={Logo_resume} /> Resume</Link>
            <Link className="option" to="/About">About me</Link>
            <Link className="option" to="/Handles" >Handles</Link>
        </Link>
        </center>
    </div>

)
}
export default Sidebar