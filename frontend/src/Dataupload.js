import { useState } from "react";
import axios from 'axios';
export default function Dataupload(){
    const [userData,setUserData]=useState({name:null,stock:null,discription:null,price:null,picture:[]})
    function handleChanges(sym,e){
        setUserData(prevValue=>{return{
                    ...prevValue,[sym]:e
                }})
    }
    function handleClick(){
        const formData=new FormData();
        formData.append('name',userData.name)
        formData.append('stock',userData.stock)
        formData.append('discription',userData.discription)
        formData.append('price',userData.price)
        for (const image of userData.picture) {
            formData.append('image', image); 
          }
        console.log(formData)
        axios.post('http://localhost:8081/upload',formData).then(result=>{
            if(result.data.Status==="Success"){
                setUserData({name:null,stock:null,discription:null,price:null,picture:[]})
                console.log("success")
            }
            else{
                console.log("failed")
            }
        }).catch(err=>console.log(err))
    }

    return(
        <>
            <h1>ADD PRODUCTS</h1>
            
            <label >Name</label>
                <input type="text" onChange={(e)=>handleChanges("name",e.target.value)}/><br></br>
            <label >Price</label>
                <input type="number" onChange={(e)=>handleChanges("price",e.target.value)}/><br></br>
            
            <label >Description</label>
                <input type="text" onChange={(e)=>handleChanges("discription",e.target.value)}/><br></br>
            <label >Stock</label>
                <input type="number" onChange={(e)=>handleChanges("stock",e.target.value)}/><br></br>
            <label>Picture</label>
                <input type="file" multiple accept="image/*" onChange={(e)=>handleChanges("picture",e.target.files)}></input><br></br>
            <button onClick={handleClick}>Submit</button><br>
            </br>
        </>

    );
}