import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'


const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

useEffect(()=>{
    const auth=localStorage.getItem('user');  //useEffect takes function as an argument that has to b run after evry subsequent render
    if(auth) 
    {
        navigate("/")
    }
})



    const collectData = async () => {
        console.log(name, email, password);             //to connect frontend with backend, axios can b used..but fetch is jsinbuilt feature//

        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),     //all data goes to body, api takes an object by making it stringify//
            headers: {
                'Content-Type': 'application/json'        //this header is fix//
            },
        });
        result = await result.json()
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result));    //to store data in localstorage//
        navigate('/')         //navigate to product page when signed up//


    }


    return (
        <div className="register" >
            <h2>Register</h2>
            <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter passwword" />
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>

        </div>
    )

}

export default SignUp