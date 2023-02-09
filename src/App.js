import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useState, useEffect } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate, setAuthenticate] = useState(false)
  useEffect (() => {
    console.log(authenticate)
  }, [authenticate])

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<ProductAll />}></Route>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />}></Route>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
