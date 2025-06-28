import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import OrderList from './components/orders/OrderList.jsx';
import OrderDetails from './components/orders/OrderDetails.jsx';
import UsersList from './components/users/UsersList.jsx';
import UsersDetail from './components/users/UsersDetail.jsx';
import Products from './components/products/Products.jsx';
import Cart from './components/Users/Cart.jsx';
import Login from './components/Users/Login.jsx';
import Register from './components/Users/Register.jsx';
import Account from './components/Users/Account.jsx';
import SingleProduct from './components/products/SingleProduct.jsx';
import Home from './components/Home.jsx';
import './css/App.css';

function App() {
  const [token, setToken] = useState(() => localStorage.getItem("authToken"));
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <>
      <Navbar 
        token={token} 
        setToken={setToken} 
      />
      <Routes>
        <Route 
          path="/" 
          element={
            <Home />
          }
        />
        <Route
          path="/orders"
          element={token ? <OrderList token={token} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/orders/:id"
          element={token ? <OrderDetails token={token} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/users"
          element={token ? <UsersList token={token} /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/users/:id"
          element={token ? <UsersDetail token={token} /> : <Navigate to="/login" replace />}
        />
        <Route
          path='/products'
          element={
            <Products
              products={products}
              setProducts={setProducts}
              singleProduct={singleProduct}
              setSingleProduct={setSingleProduct}
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path='/products/:id'
          element={
            <SingleProduct
              singleProduct={singleProduct}
              setSingleProduct={setSingleProduct}
            />
          }
        />
        <Route 
          path="/cart" 
          element={
            <Cart />
          } 
        />
        <Route 
          path="/login" 
          element={
            <Login 
              setToken={setToken} 
            />
          } 
        />
        <Route 
          path="/register" 
          element={
            <Register 
              setToken={setToken} 
            />
          } 
        />
        <Route
          path="/account"
          element={token ? <Account token={token} /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </>
  );
}

export default App;

