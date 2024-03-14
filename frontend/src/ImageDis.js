import "./ImageDis.css";
import axios from "axios";
import {useState,useEffect} from 'react';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useParams } from "react-router-dom";
export default function ImageDis(){
    const {id}=useParams();
    const [pic,setPic]=useState([])
    const [productDetails,setProductDetails]=useState({name:null,description:null,price:null})
    const [picIndex,setPicIndex]=useState(0)
    useEffect(()=>{
        axios.get('http://localhost:8081/img/'+id).then(result=>{
            console.log(result.data)
            setPic(result.data[0].image.split(","))  
            setProductDetails({
                name:result.data[0].name,
                description:result.data[0].description,
                price:result.data[0].price
            })  
        }).catch(err=>console.log(err))
    },[])


    function handleNext(){
        console.log(pic)
        if (picIndex===pic.length-1){
            setPicIndex(0)
        }
        else{
        setPicIndex(prevIndex=>prevIndex+1)
        }
    }

    function handlePrev(){
        if (picIndex===0){
            setPicIndex(pic.length-1)
        }
        else{
        setPicIndex(prevIndex=>prevIndex-1)
        }
    }

    return (
        <>
        <NavigationBar/>
        <div class="product-container">
            <div class="product-image" >
            <button className='arrow prev' style={{position:"absolute"}}onClick={handlePrev}>Prev</button> 
            <div>
                <img className="image-container ima" src={`http://localhost:8081/images/`+pic[picIndex]} alt="Slide 1" />
            </div>
            <button  className='arrow next'   onClick={handleNext}>Next</button> 
        </div>
    <div class="product-info">
    <h2 class="product-name">{productDetails.name}</h2>
    <p class="product-description">{productDetails.description}</p>
    <p class="product-price">${productDetails.price}</p>
    <button class="add-to-cart-button">Add to cart</button>
  </div>
</div>
</>
        
    )
}