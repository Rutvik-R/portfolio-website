import './index.scss'
import Sidebar from '../Sidebar'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume_pdf from '../../assets/pdfs/Rutvik_Ranpariya_Resume.pdf'

const Resume = () => {

    return (
        <>
            <Sidebar />
            <div className="Resume">
                <div className='resume_text'>
                    <center>
                        <div className="resume_info resume_part">
                           <h1> Rutvik Ranpariya</h1>
                        </div>
                        <div className='Education resume_part' >
                            <label>Education</label>
                        </div>
                        <div className='skill resume_part' >
                            <label>skill</label>
                        </div>
                        <div className='projects resume_part'>
                            <label>projects</label>
                        </div>
                        <div className='Handles_on_various_platforms resume_part'>
                            <label>Handles_on_various_platforms</label>
                        </div>
                        <div className='achivements resume_part' >
                            <label>achivements</label>
                        </div>
                        <div className='interests resume_part'>
                            <label>interests</label>
                        </div>
                    </center>
                </div>

                <div className='resume_pdf_show'>
                    <a href={resume_pdf} target="_blank" >
                    <Document file={resume_pdf} >
                        <Page pageNumber={1} />
                    </Document>
                    </a>
                </div>
            </div>
        </>
    )

}

export default Resume