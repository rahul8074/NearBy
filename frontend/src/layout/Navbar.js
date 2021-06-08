import React from 'react';
// for not wanting to laod page when contact por about button is clicked use "LINK Tag in place of <a> tag"
import { Link, NavLink ,useHistory} from 'react-router-dom';
// use NavLink for highlighting the page you are on and use "exact" for matching the exact address

import '../App.css';



const Navbar = () => {

let history = useHistory();

    
    // reload page once when user login
     
  

    
const logout=()=>{
  window.localStorage.removeItem('user');
  history.push("/")
  window.location.reload();
 
  
}

const showLogoutButton = ()=>{
  if(window.localStorage.getItem('user')){


    //return  logout button element  when user logged in
    return(
      < div style={{marginLeft:"500px",fontFamily:"monospace",fontSize:"15px",color:"purple",marginTop:"12px"}}>
          <i className="fa fa-user-circle-o fa-lg"></i> :  {(window.localStorage.getItem('user'))}
      <button className="btn btn-success btn-sm" onClick={e=>logout()} style={{marginLeft:"10px"}} > <i className="fa fa-sign-out"> Logout</i> </button>
 
      </div>
         )
  }
}

const checkLoginUser =()=>{
  if(window.localStorage.getItem('user')){
   
    return(
      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        {/* <li className="nav-item ">
          <NavLink className="nav-link" exact to="/">Home </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/tweets">Tweets</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/postmessage">Create Post</NavLink>
        </li>
            
    {/* //show logout button when user logged in */}

    {
      showLogoutButton()
    }
        <li>
        
        </li>
      </ul>
      
    </div>
    )
  }

  else{
    return(
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li>
        {/* login page */}
        <div className="login-block">
          <li className="nav-item login-items form-group" >
            <input type="text" placeholder=" username"/>
        </li>
        <li className="nav-item login-items form-group">
           <input type="password" placeholder=" password"/>
        </li>
            <li className="nav-item login-items form-group">
            <button type="submit" className="btn btn-success" style={{fontSize:"12px",borderRadius:"0"}}>Sign In</button>
        </li>
        </div>
        </li>
      </ul>
      
    </div>
    )
  }
}


//change logo link with user
const LogoLinkChange =()=>{
  if (window.localStorage.getItem('user')){
    return(
      <a className="navbar-brand " href="/tweets" style={{fontSize:"25px"}}><span className="logo">nearby</span></a>
    )
  }
  else {
    return(
      <a className="navbar-brand " href="/" style={{fontSize:"25px"}}><span className="logo">nearby</span></a>
    )
  }
}


  return (
    <div >
      <nav className="navbar  navbar-expand-lg navbar-light bg-light">

    {/* calling logo link function */}
         {LogoLinkChange()}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

       {
        checkLoginUser()
      }
      </nav>
      
      <div className="border-img" >.</div>

  

    

    </div>
  
  )
}

export default Navbar;