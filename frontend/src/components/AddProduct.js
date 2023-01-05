import React from 'react'

const AddProduct = () => {
    const [name, setName] = React.useState("")
    const [price, setPrice] = React.useState("")
    const [category, setCategory] = React.useState("")
    const [company, setCompany] = React.useState("")
    const [error, setError] = React.useState(false)
    const addProduct = async () => {

       console.log(!name)
        if (!name || !price || !category || !company)
         {
            setError(true)
            return false;
        }
        console.log(name, price, category, company)
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'application/json'        //this header is fix//
            },
        })
        result = await result.json();
        console.log(result)

    }
    return (
        <div className='product'>
            <h1>Add Product</h1>
            <input className='inputBox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter product name' />
            {error && !name && <span className='invalid'>Enter valid Name</span>}

            <input className='inputBox' type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter product price' />
            {error && !price && <span className='invalid'>Enter valid Price</span>}

            <input className='inputBox' type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter product category' />
            {error && !category && <span className='invalid'>Enter valid Category</span>}

            <input className='inputBox' type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Enter product company' />
            {error && !company && <span className='invalid'>Enter valid Company</span>}

            <button onClick={addProduct} className='appButton'>Add Product</button>
        </div>
    )
}

export default AddProduct