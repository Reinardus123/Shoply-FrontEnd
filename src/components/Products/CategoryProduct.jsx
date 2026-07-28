import axios from "axios";
import Navbar from "../HomePage/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Box, Search } from "lucide-react";
import Shoes from "../../assets/kobe.png"
import ProductCard from "./ProductCard";
import Footer from "../HomePage/Footer";
import api from "../../api/api";

function CategoryProduct(){

    const [categoryProduct, setCategoryProduct] = useState([]);
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getCategorProduct();
    },[id]);

    useEffect(() => {
        console.log("Search:", search);
        getProducts(search);
    },[search]);

    async function getCategorProduct(){

        try{
            const response = await api.get(
                `/category/${id}/products`
            );
            setCategoryProduct(response.data);

        } catch(error){
            console.log(error);
        }
    }

    async function getProducts(keyword=""){

        console.log("Keyword:",keyword);

        try{
            const response = await api.get(`/category/${id}/findproducts?search=${keyword}`);
            console.log(response.data.products);
            setProducts(response.data.products);

        } catch(error){
            console.log(error);
        }
    }
      async function handleWishlist(productid){
    try{
      const response = await api.post("/wishlist",{
        productid
      });

      await getProducts();

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
        <div className="min-h-screen">
            <Navbar showSearch={false}/>
            <section className="px-10 mt-8 transition">

                <div className="rounded-xl h-[300px] flex items-center justify-between px-20 bg-purple-50 relative overflow-hidden">

                    <div className="z-10">
                        <h1 className="text-5xl font-bold leading-tight">{categoryProduct[0]?.categoryname} Collection</h1>
                        <br />
                        <p className="text-gray-400">Discover premium footwear for your active </p>
                        <p className="text-gray-400">and stylish lifesyle</p>

                        <div className="bg-purple-200 flex items-center justify-center w-[210px] gap-2  px-4 py-2 rounded-xl font-bold text-sm text-purple-600 mt-4">
                            <Box/>
                            <span>
                                24 Products Available 
                            </span>
                        </div>
                    </div>

                    <div className="relative flex justify-center">
                        <div className="w-200 h-200 bg-purple-200 rounded-full flex items-center justify-center">
                                <img
                                src={categoryProduct[0]?.imageurl}
                                alt="" 
                                className="relative z-10 w-[300px] object-contain mb-5"
                                />
                        </div>
                    </div>
                    
                </div>


            <div className="mt-4 flex gap-4">
               <div className="flex-1">
                    <div className="bg-gray-100 flex items-center rounded-2xl overflow-hidden px-4 h-12 mt-5 shadow">
                        <input 
                            type="text" 
                            placeholder="Search for products..."
                            className="w-full px-4 py-3 outline-none"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Search size={16}/>
                    </div>
               </div>
                        <select className="w-[220px] bg-gray-100 rounded-xl px-4 h-12 shadow-sm text-sm mt-5">
                            
                            <option value="">Newest</option>

                        </select>   
             </div>

             {products.length < 1 ? 

             (
                <div className="flex items-center justify-center mt-5">
                    <h1 className="text-3xl font-semibold">
                        Product Not Found
                    </h1>
                </div> 
             )
                :

                (
                  <div className="flex-1 grid grid-cols-6 gap-6 mt-4">
                {products.map((product) => (
                 
                        <ProductCard
                        key={product.productid}
                        product = {product}
                        onAddWishlist={handleWishlist}
                        onDeleteWishlist={handleDeleteWishlist}
                       
                        />
                    
                ))}
             </div>
                )

            } 

           

            </section>

            <Footer/>
        </div>
    );

}

export default CategoryProduct;