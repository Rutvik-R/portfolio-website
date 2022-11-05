import './index.scss'
import {Link , NewLink} from 'react-router-dom'
import LogoS from '../../assets/images/Man-with-computer.png'
import man_png from '../../assets/images/man.png'
import Logo_resume from '../../assets/images/Resume_png.png'
import { useState } from 'react'


const Sidebar = () =>{

    const [showNevbar , setShowNav] = useState(false);

    return (

    <div className="nav-bar">
        <center>

        <Link className="options" to="/">
            <Link className="option" to="/"><img src={LogoS} alt="Logo" />Home Page</Link>
            <Link className="option" to="/Resume" ><img src={Logo_resume} /> Resume</Link>
            <Link className="option" to="/About"><img src={man_png} /> About me</Link>
            <Link className="option" to="/Handles" >Handles</Link>
        </Link>
        </center>
    </div>

)
}
export default Sidebar