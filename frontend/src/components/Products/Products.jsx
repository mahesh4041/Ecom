import { useEffect, useState } from "react"
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import "./Products.css"
import NavigationBar from "../NavigationBar/NavigationBar";

export default function Products(){
    const navigate=useNavigate()
    const [items,setItems]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8081/items").then((result)=>{
            console.log(result.data)
            setItems(result.data)
        }).catch(err=>console.log(err))
    },[])
    function handleOnClick(id){
        navigate(`/products/img/${id}`)
    }
    return(
        <>
        <NavigationBar/>
        <div className="product-grid">
            {items.map((item)=>{
                return(
                    <div className="product-item" onClick={()=>handleOnClick(item.id)}>
                        <img src={`http://localhost:8081/images/`+item.image.split(',')[0]} alt="Shirts"></img>
                        <h3>{item.name}</h3>
                        <h3>${item.price}</h3>
                    </div>
                )
            })}
            
        </div>
        </>

    )
}