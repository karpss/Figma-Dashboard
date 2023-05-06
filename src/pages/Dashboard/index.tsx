/* eslint-disable */
import React,{useState} from 'react';
import "./index.css";
import Navbar from './Navbar';
import Sidemenu from './Sidemenu';
import Cards from './Cards';
import Footer from './Footer';


const Dashboard = () => {
    
  

  return (
    <div className='grid-container' >
       <div className="menu-icon"  >
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