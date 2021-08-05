import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import './order.css';
import OrderScreen from './OrderScreen';

export default function Order(){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/order")
        .then(response=>setProducts(response.data))
        .catch(err=>console.log(err))
    },[]);

    if(products.length === 0 )
            return(<div>
                <h5>
                    Loading data from server...
                </h5>
            </div>)
      else{
        return(
            <div >
                {/*<br/>
                <h5>Pizzeria now gives you options to build your own pizza. Customize your pizza by choosing ingredients from the list given below.</h5>
                <br/>
                <table>
                    <tbody>
                        {products.map(product=><tr>
                           <td>{product.name}</td>
                           <td>{product.type}</td>
                           <td>Rs. {product.price}</td>
                           <td>{product.description}</td>
                           <td>{product.ingredients}</td>
                           <td>{product.toppings}</td>
                           <td ><img src={product.image} alt="Logo" width="70px" height="60px"/></td>
                        </tr>)
                        }
                    </tbody>
                </table> */}
                <div className="row">
                {products.map(product=>{
                    return <div className="col-md-6">
                        <div>
                            <OrderScreen product={product}/>
                        </div>
                    </div>
                })}
                </div>
                <br/>
                <footer style={{color:"rgb(252, 116, 6)"}}><i>Copyrights @ 2017 Pizzeria. All rights reserved.</i></footer>
                <br/>
            </div>
        )
    }     
}