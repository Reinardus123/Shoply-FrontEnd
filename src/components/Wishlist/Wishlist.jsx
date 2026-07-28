import Navbar from "../HomePage/Navbar";
import { Heart,ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import WishlistCard from "./WishlistCard";
import api from "../../api/api";
import Footer from "../HomePage/Footer";
import { Link } from "react-router-dom";

function Wishlist(){

    const [wishlists, setwishlist] = useState([]);

    useEffect(() => {
        getWishlist();
    },[]);


    async function getWishlist(){
        try{
            const response = await api.get("/wishlist");
            setwishlist(response.data);

        } catch(error){
            console.log(error);
        }
    }

    async function handleDelete(wishlistid){
        try{
            const response = await api.delete(`/wishlist/${wishlistid}`);
            console.log(wishlistid);
            getWishlist();
            
        } catch(error){
            console.log(error);
        }
    }

    return (
        <>
        <Navbar/>
            
        <div className="bg-purple-50">
        
        {wishlists.length === 0 ? (
            <div className="bg-white rounded-3xl p-16 text-center shadow-sm mt-5">

                <h2 className="text-3xl font-bold">
                   No favorites yet ❤️
                </h2>

                <p className="text-gray mt-3">
                    Start Exploring and save the products you want to buy later
                </p>
                <div className="flex items-center justify-center">

                    <Link to="/">
                    <button className="mt-8 bg-purple-600 text-white border border-purple-600 px-6 py-3 rounded-xl cursor-pointer hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                        <ShoppingCart/>
                         Continue Shopping
                    </button>
                  </Link>
                </div>
                 
            </div>
        ) : (
            <div className="mx-auto px-8 py-10">
                <div className="flex justify-between items-center mb-8" >
                    <div className="flex items-center gap-3">
                        <Heart className="text-purple-600" size={36}/>     
                        <h1 className="text-4xl font-bold">My Wishlist</h1> 
                    </div>
                </div>

                <div className="grid grid-cols-6">
                        {wishlists.map((wishlist) => (
                            <WishlistCard
                            key={wishlist.wishlistid}
                            wishlist={wishlist}
                            onDelete={handleDelete}
                            />
                        ))}
                </div>
           </div>
            
        )}
           
        </div>
         
        <Footer/>
        </>
    );
}

export default Wishlist;