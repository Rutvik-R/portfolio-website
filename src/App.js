import './App.scss';
import { Routes , Route } from 'react-router-dom'
import Front_Page from './components/Front_page';
// import Layout from './components/Layout/index'
import Resume from './components/Resume';
import About from './components/About';
import Handles from './components/Handles'; 
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<> <Front_Page /> <Sidebar />  </>} />
        <Route path="/Resume" element={<Resume />} />
        <Route path='/About' element={<About />} />
        <Route path="/Handles" element={<Handles />} />
        </Routes>
    </>
  );
}

export default App;
