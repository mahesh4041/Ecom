import {CiUser,CiHeart,CiShoppingCart} from 'react-icons/ci'
import {useRef, useState} from 'react';
import './NavigationBar.css'

export default function NavigationBar({uname}){
   const searchContent =useRef(null)
  function handleSearch(){
    console.log(searchContent.current.value)
    searchContent.current.value=null
  }
    return(
    <div className="container">
      <header>
      <h1>TALIYA </h1><br></br>
      <h2>FASHION</h2>
        <div className='header-left'>
            <a href="/Mens">MEN</a>
            <a href="/Womens">WOMEN</a>
            <a href="/Kids">KIDS</a>
            <input ref={searchContent} type="text" placeholder="Search for products, brands and more" onKeyDown={(e)=>{if(e.key==="Enter"){handleSearch();}}}></input>
            <a href="/ShoppingCart"><CiShoppingCart className='icons'/>Cart</a>
            <a href="/Wishlist"><CiHeart className='icons'/>Wishlist</a>
            <a href="/Profile"><CiUser className='icons'/>{uname}</a> 
        </div>
      </header>
    </div>
    )
}