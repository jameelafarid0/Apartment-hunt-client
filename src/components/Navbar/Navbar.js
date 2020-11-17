import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import image from '../../images/Logo.png'
import './Navbar.css'

const Navbar = () => {
      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light " style={{color:"#FBD062"}}>
         <div className="container-md">
         <img src={image} width="95px"  alt=""/>   

            <div className="topnav" id="myTopnav" class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item mr-3 active">
                  <a class="nav-link " href="/home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link " href="/link">About</a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" href="/link">Services</a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" href="/link">Concerns</a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" href="/link">Event</a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" href="/link">Contact</a>
                </li>
                {loggedInUser.email?
                 <button style={{padding: "10px 50px"}} type="button" class="btn btn-dark mr-2" >{loggedInUser.name}</button>
                 :
                <Link to="/login">
                <button style={{padding: "10px 50px", backgroundColor:"#275a53", color:"white"}} type="button" class="btn  mr-2">Login</button>
                </Link>
                }
                
                
              
              </ul>
              
            </div>

            
                      
         </div>
 
</nav>
        </div>
    );
};

export default Navbar;