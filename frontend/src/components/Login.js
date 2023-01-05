import React, { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [email, setEmail]=React.useState('');
    const [password, setPassword]=React.useState('');
    const navigate= useNavigate();

    useEffect(()=>{
        const auth= localStorage.getItem("user")  //useEffect takes function as an argument that has to b run after evry subsequent render
        if(auth){
            navigate("/")
        }
    },[])

    const handleLogin=async()=>{
        console.log("email,password",email,password)

        let result=await fetch('http://localhost:5000/login',{
            method:'post',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'        //this header is fix//
            },
    });

    result=await result.json();
    console.log(result)
    if(result.name)
    {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/")


    }
    else{
        alert("please enter correct details")
    }
    
    
    }
    return (

        <div className="login">
        <h2>Login</h2>
            <input type="text" className="inputBox" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" className="inputBox" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleLogin} className="appButton" type="button">Login</button>

        </div>
    )


}

export default Login