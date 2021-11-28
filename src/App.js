import Home from "./Pages/Home/Home";
import "./globalStyle/App.scss"
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./Pages/success/Success";
import Login from "./Pages/Login/Login";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector(state => state.user.currentUser)

  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path='/' element={ <Home/>} />
    <Route path='/login' element={ user ? <Navigate to="/"/>:<Login/>} />
    <Route path='/product/:id' element={ <Product/>} />
    <Route path='/productList/:id' element={ <ProductList/>} />
    <Route path='/cart' element={ <Cart/>} />
    <Route path='/success' element={ <Success/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
