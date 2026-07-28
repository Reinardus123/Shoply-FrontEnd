import { Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function OrderCard({order}){

    const navigate = useNavigate();
    const formattedDate = new Date(order.created_at).toLocaleDateString("us-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (

       <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 mb-5">
        
            <div className="flex justify-between items-start">

                <div className="flex gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                        <Package
                            size={28}
                            className="text-purple-600"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold">
                            Order #{order.orderid}
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            {formattedDate}
                        </p>

                        <div className="mt-5">
                            <p className="text-lg font-medium text-gray-900">
                                {order.first_product}
                            </p>

                            {Number(order.total_items) > 1 && (
                                <p className="text-lg font-medium text-gray-900 mt-1">
                                        +{Number(order.total_items)} other items
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="text-right">
                    <h2 className="text-2xl font-bold text-purple-600">
                        Rp{" "} {Number(order.total_amount).toLocaleString("id-ID")}
                    </h2>

                    <div className="mt-4">
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold
                        
                        ${order.status === "Completed" 
                            ? "bg-green-100 text-green-700"
                            : order.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : order.status === "cancelled"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-700"
                        }
                        `}>
                        {order.status}
                        </span>

                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <div className="flex justify-end">
                <button onClick={() => navigate(`/checkout/success/${order.orderid}`)}
                    className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 cursor-pointer"
                    >
                    View Details
                </button>
            </div>

       </div>
    );
}

export default OrderCard;