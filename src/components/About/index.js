import "./index.scss"
import Sidebar from "../Sidebar"
import my_image_1 from "../../assets/images/my_image_1.jpeg"

const About = () => {
    return (
        <>
            <div className="Main">
            <Sidebar />
                <div className="About">
                <center>
                    <div className="my_image">
                        <img src={my_image_1} />
                    </div>
                    <div className="personal_info" >
                        <div className="my_name" >
                            Rutvik Ranpariya
                        </div>
                    </div>
                    <div className="Other_info">
                        <center>
                            <p>I'm a competitive programmer and full-stack web developer.</p>
                            <p>I'm currently pursuing BTech in computer science and engineering at SVNIT, surat.</p>
                            <p>I enjoy writing code and learning new languages and technology.</p>
                        </center>
                    </div>
                    <div className="About_profiles" >
                        <label className="About_profile_mobile">Social media profiles : </label>
                        <tr>
                            <td><a href="https://www.linkedin.com/in/rutvik-ranpariya-702b8b226/"  target="_blank" >linkedin</a></td>
                            <td><a href="https://twitter.com/RutvikRanpariya"  target="_blank">twitter</a></td>
                        </tr>
                        <br />
                            <label >Coding profiles : </label>
                        <tr>
                            <td><a href="https://codeforces.com/profile/rutvik_1234" target="_blank" >codeforces</a></td>
                            <td><a href="https://www.codechef.com/users/rutvik_r" target="_blank" >codechef</a></td>
                            <td><a href="https://leetcode.com/Rutvik_R/" target="_blank">leetcode</a> </td>
                         
                        </tr>
                    </div>
                    <div className="ext_int">

                    </div>
                </center>
            </div>
            </div>
        </>
    )
}

export default About