import React from 'react';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Nested from './pages/Nested';
import Error from './pages/Error';
import Cart from './pages/Cart';
import OneCat from './pages/OneCat';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails';
const DirerctionOfpage = () => {
  const lang = localStorage.getItem("i18nextLng");
  if (lang == "ar"){
    document.querySelector("body").style.direction = "rtl"
  }else {
    document.querySelector("body").style.direction = "ltr"
  }
}

function App() {

  React.useEffect(() => {
    DirerctionOfpage();
  },[])


  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/nested' element={<Nested />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/category' element={<OneCat />}/>
          <Route path='/p' element={<ProductDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </Router>   

  );
}

export default App;
