import React, { useEffect, useState } from 'react' ;
import './login.scss' ;



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("") ;
  const [data1, setData1] = useState("");

  async function login(){
    let item = {email, password}
    let result = await fetch("http://localhost:8000/api/login",{
      method:"post",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"

      },
      body:JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result));
    console.log(localStorage) ;
  }
  useEffect(()=>{
    setData1(localStorage);
    console.log(data1);
    console.log(localStorage);
  },[])


  return(
    <React.Fragment>
      <div className="login">
        <div className="wrapper">
          <h2>Login</h2>
          <input type="text" placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)} />
          <input type="password" placeholder="Password"value={password} onChange={(event)=>setPassword(event.target.value)}/>
          <div className="button">
            <button onClick={login}>Login</button>
          </div>
          {email} <br /> {password}
        </div>
      </div>
    </React.Fragment>
  )
}




export default Login ;