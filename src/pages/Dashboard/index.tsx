/* eslint-disable */
import React,{useState} from 'react';
import "./index.css";
import Navbar from './Navbar';
import Sidemenu from './Sidemenu';
import Cards from './Cards';
import Footer from './Footer';


const Dashboard = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

  return (
    <div className='grid-container' >
        <div className="menu-icon" onClick={toggleMenu}>
        <strong> &#9776;</strong>
      </div>
        <Navbar/>
        <Sidemenu/>
        <Cards/>
        <Footer/>
        

        
    </div>
    
  )

  
}


export default Dashboard;