import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import './order.css';

export default function OrderScreen({product}) {
    const [setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/order")
        .then(response=>setProducts(response.data))
        .catch(err=>console.log(err))
    },[setProducts]);

    return (
        <div>
            <br/>
        <div style={{margin:"15px"}} className="shadow-lg p-1 m-3 bg-white rounded">         
            <div className="flex-container">
                <div className="w-100">
                    <h3>{product.name}</h3>
                    {/* https://images-na.ssl-images-amazon.com/images/I/31sIPsH0CRL._SX425_.jpg */}
                    {/* <img src="https://johnbrowncaterhire.co.uk/wp-content/uploads/forest-green-linen-7-300x300.png" alt="Logo" width="20px" height="20px"></img> */}
                    <div className={ product.type === "veg" ? "box-green" : "box-red"}></div>
                    <br/><br/><br/>
                    <p style={{fontWeight:"bold",fontSize:"18px",marginTop:"0px"}}>Rs. {product.price}</p>
                </div>
                <div className="w-100" style={{marginRight:"15px"}}>
                    <p style={{textAlign:"left",fontSize:"15px"}}>{product.description}</p>
                    <p style={{textAlign:"left",fontSize:"14px"}}><b>Ingredients: </b>{product.ingredients.join(", ")}</p>
                    <p style={{textAlign:"left",fontSize:"14px"}}><b>Toppings: </b>{product.topping.join(", ")}</p>
                </div>
                <div className="w-100">
                <img alt="Logo" src={product.image} className="img-fluid" style={{height:"180px", width:"190px"}}/><br/>
                {/* <img src="/AddToCart.png" alt="Logo" width="90px" height="35px"></img> */}
                <button className="btn">Add to Cart</button>
                </div>
            </div>
        </div>
        </div>
    )
}
