import React from "react";
import {Navigate, Outlet} from 'react-router-dom'       //outlet is used to handle wrapper component//


const PrivateComp=()=>{
    const auth=localStorage.getItem('user');

    return auth?<Outlet/>:<Navigate to="/sign-up"/>
}

export default PrivateComp