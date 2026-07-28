import React from "react";
import {FaHeart, FaStar, FaShoppingCart} from "react-icons/fa";
import { Trash, Pencil } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({product, onAddWishlist, onDeleteWishlist, admin, onDeleteproduct, onEditProduct}){

    const navigate = useNavigate();

    const [liked, setLiked] = useState(product.iswishlist);
    const [wishlistid, setWishlistId] = useState(product.wishlistid);

    async function handleWishlist(){

       try{

            if(liked){
                const success = await onDeleteWishlist(
                    wishlistid
                );

                if(success){
                    setWishlistId(null);
                    setLiked(false);
                }
            } else {

                const success = await onAddWishlist(
                    product.productid
                );                

                if(success){
                    setWishlistId(success.wishlistid);
                    setLiked(true);
                }
            }
       } catch(error){
            console.log(error);
       }
    }

    return(
        <div className="w-[210px] bg-white border border-gray-200 rounded-xl p-4 hover:shadow-xl transition-all duration-300 relative">

            <button 
                onClick= {handleWishlist}   
                className="absolute right-4 top-4 text-gray-400 hover:text-red-500 transition-all cursor-pointer">
                    <FaHeart
                    className={`text-xl ${liked ? "text-red-500": "text-gray-400"}`}
                    />
            </button>

            <div className="h-[170px] flex items-center justify-center">
                <img 
                src={product.imageurl.startsWith("/uploads") ? `http://localhost:3000${product.imageurl}` : product.imageurl} 
                alt="" 
                className="w-[140px] object-contain hover:scale-105 transition-all duration-300"
                />
            </div>

            <div className="mt-4">
                <h3 className="font-semibold text-[15px]">
                    {product.productname}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                    {product.categoryname}
                </p>
                <div className="flex items-center gap-1 mt-2 text-sm">
                    <FaStar className="text-yellow-400"/>
                    <span>
                        {product.rating}
                    </span>
                </div>
                <h2 className="font-bold text-xl mt-3">
                    Rp {product.price.toLocaleString("id-ID")}
                </h2>

                {admin ? 

                    (
                        <div className="flex gap-2">
                          <button 
                            className="mt-4 w-full border border-orange-300 text-orange-600 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 hover:text-white transition-all duration-300 cursor-pointer"
                         >
                            <Pencil size={20}/>
                        </button>
                          <button 
                            className="mt-4 w-full border border-red-300 text-red-600 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer"
                             onClick={() => onDeleteproduct(product.productid)}
                            >
                            <Trash size={20}/>
                        </button>
                        </div>
                    ) : (
                        
                        <button className="mt-4 w-full border border-purple-300 text-purple-600 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer"
                            onClick={() => navigate(`/product/${product.productid}`)}
                >
                            <FaShoppingCart/>
                             Add to cart
                        </button>

                    )
                    
            }
                
            </div>

        </div>
    );
}


export default ProductCard;