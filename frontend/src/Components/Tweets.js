import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../../src/App.css';

//login details getting


function Tweets() {


const ShowCommentSection = (e) =>{
  return(
    <div>
       
    </div>
  )
}

//fetching post message data from database/server
//using hooks for state handling
const [messages,setMessage] = useState([]);

//  load function whenever page refreshes 
 useEffect( () =>{
   loadMessage();  
 },[])
 
//data fetching from rest api which is sever i have created using express.js
 const loadMessage = async () => {
   const result = await axios.get("http://localhost:4000/postmessages");
   //console.log(result)
   setMessage(result.data)
 }


    return(
      <>
       
      <div className='tweets'>
       {/* displaying messages from database to react home page   "tweets" */}
        {
            messages.slice().reverse().map((user,key) =>(
            <div className="card container-fluid mt-2 " style={{margin:"auto"}}>
                <div className="Card-header">
                        {/* Date          */}
                        <div>
                        <i style={{float:"left",marginLeft:"20px",marginTop:"-4px",color:"black"}} className="fa fa-user fa-2x"></i>
                        
                        <p id="username">{user.username}</p>
                        {/* displaying date and time */}
                        <p id="date"><span style={{marginRight:"7px"}}>{user.Date.slice(11,16)}</span> {user.Date.slice(8,10)}/{user.Date.slice(5,7)}/{user.Date.slice(0,4)}</p>
                        
                        </div>
                </div>
                   
                <div className="card-body "> 
                    <div>
                    <h6 className="card-title"  style={{backgroundColor:"white",padding:"20px",margin:"0 -30px",marginBottom:"1px",color:"blue",fontFamily:"cursive"}} >{user.title}</h6>
                    <p className="card-text" style={{backgroundColor:"white",padding:"20px",margin:"0 -30px",color:"gray",border:"2px" }}> {user.message}</p>
                   
                  {/* Comment section  */}
                   
                   <div style={{margin:"3px",marginBottom:"-10px"}}>
                   <button className="btn btn-info btn-sm" onClick={e=>ShowCommentSection()} ><i className="fa fa-comments-o fa-2x"></i></button>
                    <a href="#"><i className="fa fa-thumbs-up "></i></a>
                   </div>
                   
                    </div> 
                </div>
            </div>
            ))
        }
         
        </div>
</>
         )
        }

export default Tweets;