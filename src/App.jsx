import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Projects from './Components/Projects';
import CategoryProjects from './Components/CategoryProjects';
import Viewproject from './Components/Viewproject';
import Prebidservice from './Components/Prebidservice';
import Epcservice from './Components/Epcservice';
import OperationMaintain from './Components/OperationMaintain';
import WaterandEnv from './Components/WaterandEnv';
import EnergyandIndustry from './Components/EnergyandIndustry';
import Sectors from './Components/Sectors';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/category/:category" element={<CategoryProjects />} />
        <Route path="/projects/:id" element={<Viewproject />} />
        <Route path="/sectors" element={<Sectors/>} />
        <Route path="/services/prebid" element={<Prebidservice />} />
        <Route path="/services/epc" element={<Epcservice />} />
        <Route path='/services/O&M' element={<OperationMaintain />}/>
        <Route path='/services/water&environment' element={<WaterandEnv />}/>
        <Route path='/services/energy&industry' element={<EnergyandIndustry />}/>
        




      </Routes>
      <Footer />

    </>
  )
}

export default App
