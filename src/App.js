import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useState, useEffect } from 'react';

function App() {
  const [authenticate, setAuthenticate] = useState(false)
  useEffect (() => {
    console.log(authenticate)
  }, [authenticate])

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<ProductAll></ProductAll>}></Route>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}></Login>}></Route>
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
