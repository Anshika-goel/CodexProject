import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logoe.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router'

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }

  const navigate = useNavigate()

  const navigateToURL = (URL, index) => {
    navigate(URL)
    setSelected(index)
  }

  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Pro<span>du</span>cts
        </span>
      </div>

      <div className="menu">
      {SidebarData.map((item, index) => {
          return (
            
            <div className={selected === index ? "menuItem active" : "menuItem"}
              // onClick={() => setSelected(index)}
              onClick={e=>navigateToURL(`${item.route}`, index)}
              >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
