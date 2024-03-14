import Dataupload from "./Dataupload";
import ImageDis from "./ImageDis"
import "./ImageDis.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ImageLogo from "./ImageLogo";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import Welcome from "./components/Welcome/Welcome";
import Products from "./components/Products/Products";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Welcome" element={<Welcome/>}></Route>
        <Route path="/upload" element={<Dataupload/>}></Route>
        <Route path="/products/img/:id" element={<ImageDis/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      </Routes>

    </BrowserRouter>
  
  )
 

  
}

export default App;
