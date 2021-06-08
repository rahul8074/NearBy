import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import FormMessage from './Components/FormMessage';
import Tweets from './Components/Tweets';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
 
 

const loggedInUSer = () =>{
  if(window.localStorage.getItem('user')){
    return(
      <Switch>
      <Route exact path="/tweets" component={Tweets} />
    
      <Route exact path="/postmessage" component={FormMessage}  />
    </Switch>
    )
  }
}

function App() {


  return (
    <Router className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={SignUp}/>
      <Route exact path="/signin" component={SignIn} />
      
    </Switch>
     {
       loggedInUSer()
     }
    </Router>
  );
}

export default App;
