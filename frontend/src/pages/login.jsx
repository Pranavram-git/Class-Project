import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
   const navigate = useNavigate();
    
    const[formdata,setFormdata] = useState({
      username:"",
      password:""
    });
    function handlesubmit(e){
      e.preventDefault();
      console.log(formdata)
      alert("Login Successful!"); 
      navigate("/dashboard",{
        state: formdata,
      });
    }
    function handlechange(e) {
      e.preventDefault();
      setFormdata({
        ...formdata,
        [e.target.name]: e.target.value,
      });
    }
      
    
    return(
      <form onSubmit={handlesubmit}>
      <input type="text" placeholder="username" required name="username" onChange={handlechange}/>
      <input type="password" placeholder="password" required name="password" onChange={handlechange}/>
      <button type="submit">submit</button>
      </form>

    );
}

export default Login;