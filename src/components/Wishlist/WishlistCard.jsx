import { FaShoppingCart, FaStar, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function WishlistCard({wishlist, onDelete}){


    const navigate = useNavigate();

    return (
        <div className="w-[210px] bg-white border border-gray-200 rounded-xl p-4 relative hover:shadow-xl transition-all duration-300">
            
            <div className="h-[170px] flex items-center justify-center">
                <img 
                src={wishlist.imageurl}
                alt="" 
                className="w-[140px] object-contain hover:scale-105 transition-all duration-300"
                />
            </div>

            <div className="mt-4">
                <h3 className="font-semibold text-[15px]">
                    {wishlist.productname}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                    {wishlist.categoryname}
                </p>
                <div className="flex items-center gap-1 mt-2 text-sm">
                    <FaStar className="text-yellow-400"/>
                    <span>
                        {wishlist.rating}
                    </span>
                </div>

                <h2 className="font-bold text-xl mt-3">
                   Rp. {wishlist.price.toLocaleString("id-ID")}
                </h2>

                <button className="mt-4 w-full border border-purple-300 text-purple-600 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer"
                    onClick={() => navigate(`/product/${wishlist.productid}`)}
                >
                    <FaShoppingCart/>
                    Add to Cart
                </button>

                <button className="mt-4 w-full border border-red-300 text-red-600 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer"
                    onClick={() => onDelete(wishlist.wishlistid)}
                >
                    <FaTrash/>
                    Remove
                </button>
            </div>
        </div>
    ); 
}

export default WishlistCard;