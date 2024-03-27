
import './App.css';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <h1>Hello world</h1> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/addProduct" element={<AddProduct/>}></Route>
        <Route path="/editProduct/:id" element={<EditProduct/>}></Route>
      </Routes>
    </>
  );
}

export default App;
