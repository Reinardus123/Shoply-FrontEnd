import { useEffect, useState } from "react";
import Home from "./pages/HomePage.jsx";
import Login from "./components/AuthPage/login.jsx";
import Register from "./components/AuthPage/register.jsx";
import Profile from "./pages/Profile.jsx";
import Categories from "./components/Categories/Category.jsx";
import { Routes, Route } from "react-router-dom";
import CategoryProduct from "./components/Products/CategoryProduct.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProtectedRoute from "./token.jsx";
import api from "./api/api.js";
import DetailPage from "./components/DetailPage/DetailPage.jsx";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart/Cart.jsx";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import AllProducts from "./components/Products/AllProducts.jsx";
import CheckoutSuccess from "./components/Checkout/CheckoutSuccess.jsx";
import AllOrders from "./components/Orders/AllOrders.jsx";
import CreateCategory from "./components/Admin/Category/CreateCategory.jsx";
import AdminLayout from "./components/Admin/AdminLayout.jsx";
import ProfileContent from "./pages/ProfileContent.jsx";
import CreateProduct from "./components/Admin/Product/CreateProduct.jsx";
import AllProduct from "./components/Admin/AllProduct/AllProduct.jsx";
import AdminProtectedRoute from "./adminProtectedRoute.jsx";
function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    api.get("/profile").catch(() => {});
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route path="/categories" element={<Categories />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/categories/:id" element={<CategoryProduct />} />

      <Route path="/product/:id" element={<DetailPage />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/wishlist" element={<Wishlist />} />

      <Route path="/allProducts" element={<AllProducts />} />

      <Route path="/checkout/success/:orderid" element={<CheckoutSuccess />} />

      <Route path="/allOrders" element={<AllOrders />} />


      

      <Route path="/admin" element={
        
        <AdminProtectedRoute>
           <AdminLayout/>
        </AdminProtectedRoute>
      }
        >
        <Route index element={<ProfileContent />} />
        <Route path="category/create" element={<CreateCategory />} />
        <Route path="product/create" element={<CreateProduct />} />
        <Route path="product/allProduct" element={<AllProduct />} />
        <Route path="product/edit/:productid" element={<CreateProduct/>}/>
      </Route>
    </Routes>
  );
}

export default App;
