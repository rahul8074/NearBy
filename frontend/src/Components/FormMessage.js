import React,{useState,useEffect} from 'react';
import {useHistory,useLocation} from 'react-router-dom';
import axios from 'axios';


var user1=window.localStorage.getItem('user')



const FormMessage = () => {
 
  let location = useLocation();
  let history = useHistory();

  var user=location.state
  

  const [msg,setMsg] = useState({
    title :"",
    message : "",
    username:user1
  });

 
  const {title,message} = msg;
  const onInputChange =e => {
    setMsg({...msg,[e.target.name]  : e.target.value});

  }

  const onSubmit = async(e) => {
    e.preventDefault();
    console.log(msg)
    console.log("-------------------------------------")
    await axios.post('http://localhost:4000/postmessages',msg)
      .then(response =>{
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    history.push('/tweets');
  }
 
    return(
        <div className="container msg-form"  >
       
        <div className="tweetform  w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Creating New Post</h2>
          <form  onSubmit ={e =>onSubmit(e)} >

        
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="title"
                value = {title}
                placeholder="Enter Title"
                onChange = {e => onInputChange(e)}
                
              />
            </div>

             
            <div className="form-group">
              <textarea
                type="text"
                className="form-control form-control-lg"
                name="message"  
                placeholder="Type message here........."
                value = {message}
                onChange = {e => onInputChange(e)}
              />
            </div>
         
            <button type='submit' className="btn btn-primary btn-block"  >Post</button>
   
          </form>
        </div>
      </div>
    )
}

export default FormMessage;