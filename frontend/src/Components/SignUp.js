import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
 
const SignUp = () => {
    let history = useHistory();
    //useState Hooks 
    const [user,setUser] =useState({
        name:"",
        email:"",
        password:"",
        selectedFile: null 
    });

    const {name,email,password,selectedFile} =user;
    const onInputChange = e => {
        setUser({...user,[e.target.name] : e.target.value})
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log(user)
        await axios.post("http://localhost:4000/users",user)
            .then(response =>{
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
            history.push('./signin')
    }




    return(
        <div className="sign-up-page">
            <div className="container-fluid  signup  w-50 mx-auto shadow-lg p-4 ">
            <form  onSubmit={e =>onSubmit(e)}  >
                <h2 style={{textAlign:"center",fontFamily:"Arial"}}>nearby</h2>      
            <div className="form-group ">
          
                <div className="input-container">
                <i class="fa fa-user-o fa-2x" aria-hidden="false" style={{marginRight:"10px",marginTop:"5px"}}></i>
                <input  className="form-control form-control-lg " 
                type="text" 
                name="name"
                value={name}
                placeholder="Enter Your Full Name"
                onChange = {e =>onInputChange(e)}
                />
                </div>
                </div>
            <div className="form-group">
                
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

            {/* image */}
     

            <hr style={{height:"1px",backgroundColor:"black",width:"100%",opacity:"0.3",borderRadius:"10px"}}/>
             <button className=" create-account btn btn-success" type="submit"> <i class="fa fa-lock " aria-hidden="false" style={{marginRight:"10px",marginTop:"10px"}}></i>Create Account</button>
             <p style={{marginTop:"20px"}}><span style={{fontSize:"15px ", marginRight:"17px " }}>If you already have an account use</span><Link exact to='/signin'><span style={{fontSize:"18px",color:"blue"}}>Sign-in</span></Link></p>
            </form>
            </div>
        </div>
    )
}

export default SignUp;