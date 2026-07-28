import { RotateCwSquare, Trash, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProductRow({product, handleDelete, handleRestore}){

    const navigate = useNavigate();
    return (
        
            <tr className="border-b border-gray-100 hover:bg-gray-50 transition">
                <td className="py-4">
                    <img 
                        src={product.imageurl.startsWith("/uploads") ? `http://localhost:3000${product.imageurl}` : product.imageurl}  
                        alt={product.productname}
                        className="w-14 h-14 object-contain" 
                    />
                </td>

                <td>

                    <div>
                        <p className="font-semibold">
                            {product.productname}
                        </p>
                    </div>

                </td>

                <td>
                    <p className="font-semibold">
                            {product.categoryname}
                    </p>
                </td>

                <td>
                    Rp {Number(product.price).toLocaleString("id-ID")}
                </td>

                <td>

                    {
                        product.status === 'Active' ? 

                        <span className="flex items-center gap-2 text-green-600">
                            <div className="flex items-center gap-2 text-green-600"></div>
                            Active
                        </span>

                        : 
                        <span className="flex items-center gap-2 text-red-500">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            Inactive
                        </span>
                    }
                </td>

                <td>
                    <div className="flex justify-center gap-3">
                        <button className="text-orange-500 hover:text-orange-600 cursor-pointer"
                            onClick={() => navigate(`/admin/product/edit/${product.productid}`)}
                        >
                            <Pencil size={18}/>
                        </button>

                        {
                            product.status === 'Active'

                            ? 
                            <button 
                                className="text-red-500 hover:text-red-600 cursor-pointer"
                                onClick={() => handleDelete(product.productid)}
                            >
                                <Trash size={18}/>
                            </button>

                            : 
                            <button 
                                className="text-blue-500 hover:text-blue-600 cursor-pointer"
                                onClick={() => handleRestore(product.productid)}
                            >
                                <RotateCwSquare size={18}/>
                            </button>
                        }
                    </div>
                </td>
            </tr>
    );
}

export default ProductRow;