import { useState, useEffect } from 'react';
import axios from "axios";
import './build.css';

export default function Build(){
    const [products, setProducts] = useState([]);
    const [price,setPrice] = useState(0);
    useEffect(()=>{
        axios.get("http://localhost:3500/build")
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
            <div>
            <div>
                <br/>
                <h5>Pizzeria now gives you options to build your own pizza. Customize your pizza by choosing ingredients from the list given below.</h5>
                <br/>
                <table class="styled-table">
                    <tbody>
                        {products.map(product=><tr>
                           <td><img src={product.image} alt="Logo" width="70px" height="60px"/></td>
                           <td style={{textAlign:"center"}}><b>{product.tname} Rs. {product.price}</b></td>
                           {/* <td>Rs {product.price}</td><br/> */}
                           <td style={{color:"rgb(255, 102, 0)",fontWeight:"bold"}}><input type="checkbox" value={product.price} onClick={(e)=>{
                               var checkbox = e.target;
                               if(checkbox.checked === true){
                                   setPrice(price+parseInt(e.target.value));
                               }
                               else{
                                   setPrice(price-parseInt(e.target.value));
                               }
                               }}/> Add</td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <h4 style={{textAlign:"left",color:"rgb(170, 6, 170)",marginLeft:"400px"}}>Total Cost: {price}</h4><br/>
            
            <button className="btn2">Build Ur Pizza</button><br/><br/><br/>
            <footer style={{color:"rgb(252, 116, 6)"}}><i>Copyrights @ 2017 Pizzeria. All rights reserved.</i></footer>
            <br/>
            </div>
        )
    }   
}
