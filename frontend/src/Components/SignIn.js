import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const SignIn = () => {
    
    let history = useHistory();

    const [user,setUser] = useState({
        email : "",
        password: ""
    });
 
     
   //login details of user
   const [loginUser,setStatus] =useState([]);

    
    const {email,password}=user;
   
    const onInputChange = e => {
        setUser({...user,[e.target.name] : e.target.value})
        
    }
    
 

  
    const onSubmit = async(e) => {
        e.preventDefault();
        // console.log(user)
        // console.log("login information is sending to server")
        await axios.post("http://localhost:4000/signin",user)
            .then(response =>{
                // console.log("login information is sent  to the server")
                // console.log(response)
               
                setStatus(response.data)
                
                if(response.data.user){
                    
                    //set username to local storage
                    window.localStorage.setItem('user',response.data.user)
                    history.push('/tweets');
                    //reload tweets page after push
                    window.location.reload()
                }
               
            })
            .catch(error => {
                console.log(error)
                console.log("error in login sending to server")
            })
       
            // //  const result= await axios.get("http://localhost:4000/signin");
            // //  alert(result.data)        
            
    }
 


    //Login invalid password alert
   const LoginStatus =(loginUser) => {
    if(loginUser.msg){
            return (
                
                <div class="alert alert-danger" role="alert">
                    {loginUser.msg}
                    
                </div>
            )
            }
    }

 
 
 

    return(
        <>
   
          <div className="sign-up-page">
            <div className="container-fluid signup  w-50 mx-auto shadow-lg p-4 ">
           
           {/* invalid password warning while login */}
            {
                LoginStatus(loginUser)
                
            }
       
            <h2 style={{textAlign:"center",fontFamily:"Arial"}}>Login In</h2>
            <form  onSubmit={e =>onSubmit(e)}   >
                      
            <div className="form-group ">
                <p></p>
                <div className="input-container">
                <i class="fa fa-envelope-o fa-2x" aria-hidden="false" style={{marginRight:"10px",marginTop:"5px"}}></i>
                <input className="form-control form-control-lg" 
                type="email" 
                placeholder="Enter Your E-mail Address" 
                name="email"
                value={email}
                onChange = {e =>onInputChange(e)}
                />
                </div>
            </div>
            <div className="form-group">
       
                <div className="input-container">
                <i class="fa fa-key fa-2x" aria-hidden="false" style={{marginRight:"10px",marginTop:"5px"}}></i>
                <input  className="form-control form-control-lg"
                type="password" 
                placeholder="Enter Your Password" 
                name="password" 
                value={password}
                onChange = {e =>onInputChange(e)}
                />
                
                </div>
            </div>
            <hr style={{height:"1px",backgroundColor:"black",width:"100%",opacity:"0.3",borderRadius:"10px"}}/>
             <button className=" create-account btn btn-success" type="submit"> <i class="fa fa-sign-in " aria-hidden="false" style={{marginRight:"10px",marginTop:"10px"}}></i>Log in</button>
             <p style={{marginTop:"20px"}}><span style={{fontSize:"15px ", marginRight:"17px " }}>Create New Account</span><Link exact to='/'><span style={{fontSize:"18px",color:"blue"}}>Sign Up</span></Link></p>
            </form>
            </div>
        </div>

        
        
        
        </>
    )
}
 
export default SignIn;