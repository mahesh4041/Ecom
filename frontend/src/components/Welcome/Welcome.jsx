import { useLocation,useNavigate } from "react-router-dom"
import NavigationBar from "../NavigationBar/NavigationBar"
import {useEffect} from 'react';
import './Welcome.css';

export default function Welcome(){
    const navigate=useNavigate()
    const location=useLocation()
    const data=location.state
    console.log(data)
    useEffect(()=>{
        if (data===null){
            navigate('/')
        }
    },[])
    

    return(
        <>
        {data!==null && 
        <>
        <NavigationBar uname={data.user_name}/>
       
        <div className="container">
        <main className="main">
            <div className='box'>
                <section className="hero">
                    <h2>Welcome to <br></br> Taliya <br></br> Fashion</h2>
                    <p>Our online clothing store offers a wide variety of stylish and trendy clothing options for men and women.</p>
                    <p>We have everything you need to look and feel your best, from casual wear to formal attire.</p>
                </section>
            </div>
        </main>
        <section className="products">
            <h3>T-shirts</h3>
            <p>Browse our selection of high-quality T-shirts for men and women.</p>
        
        </section>

        <footer className="footer">
            <p>&copy; Taliyah Fashion 2024</p>
        </footer>
        </div>

        </>
        }
        
        </>
    )
}