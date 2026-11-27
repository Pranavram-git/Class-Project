import { use, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
   const navigate = useNavigate();
    const location = useLocation();
    const[ logindata,setLogindata] = useState({
      username:"",
      password:"",
    });
    function handlesubmit(e){
      e.preventDefault();
      const registerdata = location.state;
      console.log("login page",logindata)
   if( logindata.username === registerdata.name &&  logindata.password === registerdata.password ){
      console.log("login success unaku kannu teriuthu")
      navigate("/dashboard",{
        state: logindata,
      });
    }
     else{
        console.log(" unaku kannu teriuma tetriyatha '<.>', terium na correct a enter pannu")
     }
    }
    function handlechange(e) {
      e.preventDefault();
      setLogindata({
        ...logindata,
        [e.target.name]: e.target.value,
      })
    }
      
    
return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 text-center">
  <h1 className="text-2xl font-bold text-purple-600 mb-4">Login Page</h1>

  <form onSubmit={handlesubmit} className="flex flex-col items-center gap-3">
    {/* Box containing labels, inputs, AND the login button */}
    <div className="flex flex-col items-center gap-3 bg-white border border-slate-200 p-6 rounded-lg shadow">
      <div className="flex flex-col items-center gap-1">
        <label className="text-sm font-semibold text-gray-700">UserName</label>
        <input
          type="text"
          placeholder="username"
          required
          name="username"
          onChange={handlechange}
          className="text-center border p-2 rounded"
        />
      </div>

      <div className="flex flex-col items-center gap-1">
        <label className="text-sm font-semibold text-gray-700">Password</label>
        <input
          type="password"
          placeholder="password"
          required
          name="password"
          onChange={handlechange}
          className="text-center border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 rounded mt-2"
      >
        Login
      </button>
    </div>
  </form>
</div>
);
}

export default Login;