import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        getProduct();  //we can directly create getProduct function and call API in useEffect but this wud b bad practice.. 
        //hence we create function separtely and call it here

    }, [])

    //create function to get products' API
    const getProduct = async () => {


        let result = await fetch("http://localhost:5000/products")
        result = await result.json();
        setProducts(result)

    }

    const deleteProduct = async (id) => {

        //API call
        let result = await fetch(`http://localhost:5000/product/${id}`, {
            method: "Delete",
        })

        result = await result.json()
        if (result) {
            getProduct()
        }
    }
    return (
        <div className='product-list'>
            <h2>Product List</h2>
            <ul>
                <li>Sr.No.</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>

            {
                products.map((item, index) =>

                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>Rs.{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li>
                        <button onClick={() => { deleteProduct(item._id) }}>Delete</button>
                        <Link to={"/update/"+item._id}>Update</Link>
                        </li>
                    </ul>



                )
            }
        </div>
    )
}

export default ProductList