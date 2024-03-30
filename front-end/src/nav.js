import React from "react";
import { Link } from "react-router-dom";
import './App.css';


const Nav=()=>{
    return(
    <div class="flex-container"  >
        
    <div className="navlogo"> 
        <h1 className="green">CRISTIANO</h1>
        <h1 className="red">RONALDO</h1>
    </div>
 <ul className="navul">
   <li> <Link to="/">Home</Link>  </li>
   <li> <Link to="Admin">Admin</Link>  </li>
   <li> <Link to="biography">Biography</Link>  </li>
   <li> <Link to="awards">Awards</Link>  </li>
   
   <li> <Link to="cars">Cars</Link>  </li>
   <li> <Link to="childrens">Childrens</Link>  </li>
   <li> <Link to="girlfriends">Girlfriends</Link>  </li>
   <li> <Link to="exercise">Exercise</Link>  </li>
   <li> <Link to="gallery">Gallery</Link>  </li>
   <li> <Link to="teams">Teams</Link>  </li>
   <li> <Link to="salary">Salary</Link>  </li>
 
    </ul>
    </div>
    )
}
export default Nav;