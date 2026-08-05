import React from "react";
import ProductCard from "./ProductCard"
import api from "../../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function ProductSection() {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProduct();
  },[]);

  async function getAllProduct(){
    try{

        const response = await api.get(
          "/products"
      ); 
      setProducts(response.data.products);
      console.log(response.data);
     
      
    } catch(error){
      console.log(error);
    }
  }

  async function handleWishlist(productid){
    try{
      const response = await api.post("/wishlist",{
        productid
      });

      await getAllProduct();

      console.log(response.data);
      return response.data;

    } catch(error){
        console.log(error);
        return false;
    }
  }

  async function handleDeleteWishlist(wishlistid){
    try{
      const response = await api.delete(`wishlist/${wishlistid}`);
      console.log(wishlistid);
      return true;

    } catch(error){
      console.log(error);

      return false;
    }
  }

  return (
    <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Best Selling Products</h2>

      <Link to="/allProducts">
          <button className="text-purple-600 font medium cursor-pointer">
            View All Products →
        </button>
      </Link>
        
      </div>

      <div className="flex gap-10">
       {products.slice(0,6).map((product) => (
        <ProductCard
          key={product.productid}
          product={product}
          onAddWishlist={handleWishlist}
          onDeleteWishlist={handleDeleteWishlist}
        />
       ))}
      </div>
    </section>
  );
}

export default ProductSection;
