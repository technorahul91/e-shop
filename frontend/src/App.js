import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComp from './components/PrivateComp';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComp />}>
            <Route path='/' element={<ProductList/>} />
            <Route path='/add' element={<AddProduct/>} />
            <Route path='/update/:id' element={<UpdateProduct/>} />
            <Route path='/logout' element={<h1>logout </h1>} />
            <Route path='/profile' element={<h1>profile</h1>} />
          </Route>

          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>

      <Footer />   {/* If no routing is given to router then keep it outside BrowserRouter otherwise place it inside BR */}
    </div>
  );
}

export default App;
