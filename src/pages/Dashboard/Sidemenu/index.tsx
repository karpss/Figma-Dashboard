/* eslint-disable */
import React, {useState} from 'react';

const Sidemenu = () => {

  const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
      

  return (
    
    <div className="aside">
      
        <div className="aside_close-icon">
          <strong>&times;</strong>
        </div>
        <ul className="aside_list">
          <li className="aside_list-item">Menu item1</li>
          <li className="aside_list-item">Menu item2</li>
          <li className="aside_list-item">Menu item3</li>
          <li className="aside_list-item">Menu item4</li>
          <li className="aside_list-item">Menu item5</li>
        </ul>
      </div>
  )

  
}

export default Sidemenu;