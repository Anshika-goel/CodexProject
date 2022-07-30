import React from 'react';
import { Link } from 'react-router-dom';

const Nav=()=>{
    return(
        <div>
        <div>
            <ul className = "nav-ul">
                    <li>
                    <Link to ="/Home">   Home    </Link>
                    </li>
                    <li>
                    <Link to ="/SignUp">   SignUp     </Link>
                    </li>
                    <li>
                    <Link to ="/LogIn">  Login  </Link>
                    </li>
            </ul>
            </div>
            <div className='home'>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
           <img src={process.env.PUBLIC_URL+"images/eSamudaay-removebg .png"} />
            </div>
            <div className='container-1'>
          <h2 className='center-text1'> Know Your Compliance</h2>
            </div>
         </div>
        
    )
}
export default Nav;