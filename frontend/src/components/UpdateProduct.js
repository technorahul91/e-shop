import React, { useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const UpdateProduct = () => {
    const [name, setName] = React.useState("")
    const [price, setPrice] = React.useState("")
    const [category, setCategory] = React.useState("")
    const [company, setCompany] = React.useState("")
    const params= useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        console.log(params)
  //call the function which helps in getting API//
        getProductDetails();
    },[])
//create the function which will get the details//
    const getProductDetails= async ()=>{
        let result= await fetch(`http://localhost:5000/product/${params.id}`)
        result=await result.json();
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)
    }

    const updateProduct = async () => {
        console.log(name, price,category,company)
        let result= await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"put",
            body:JSON.stringify({name, price,category,company}),
            headers: {
                'Content-Type': 'application/json'        //this header is fix//
            },
        })
        result = await result.json()
        console.log(result)
        navigate("/")

    }
    return (
        <div className='product'>
            <h1>Update Product</h1>
            <input className='inputBox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter product name' />
           
            <input className='inputBox' type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter product price' />
           
            <input className='inputBox' type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter product category' />
           
            <input className='inputBox' type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Enter product company' />
           
            <button onClick={updateProduct} className='appButton'>Update  Product</button>
        </div>
    )
}

export default UpdateProduct