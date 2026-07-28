import { FaHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function ProductCard({product}){

    const navigate = useNavigate();

    return(
      
        <div className="w-[210px] bgt-white border border-gray-200 rounded-xl hover: shadow-xl transition-all duration-300 relative p-4">
            
            <button className="absolute right-4 top-4 text-gray-400 hover:text-red-500 transition-all">
                <FaHeart/>
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
                    <span>{product.rating}</span>
                </div>  
                <h2 className="font-bold text-xl mt-3">
                    Rp.{product.price.toLocaleString("id-ID")}
                </h2>
                <button className="mt-4 w-full border border-purple-300 text-purple-600 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-600 hover:text-white transition-all duration-300 cursor-pointer" 
                onClick={() => navigate(`/product/${product.productid}`)}>
                    Detail
                </button>
            </div>
        </div>

    );
}

export default ProductCard;