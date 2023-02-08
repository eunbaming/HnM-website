import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<ProductAll></ProductAll>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
