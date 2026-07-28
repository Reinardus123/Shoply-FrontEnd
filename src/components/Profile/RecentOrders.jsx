import { useState, useEffect } from "react";
import api from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import { Package, ChevronRight } from "lucide-react";

function RecentOrders(){

    const [orders, setOrder] = useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
        getOrders();
    },[]);

    async function getOrders(){

        try{
            const response = await api.get("/orders/recent");
            setOrder(response.data);

            console.log(response.data);

        } catch(error){
            console.log(error);
        }
    }

    if(orders.length === 0 ){
        return (
            <div className="bg-white rounded-3xl shadow-lg p-8 h-[560px] flex flex-col justify-center items-center">
                <Package
                    size={60}
                    className="text-purple-500 mb-5"
                />

                <h2 className="text-2xl font-bold">
                    No Orders Yet
                </h2>

                <p className="text-gray-500 mt-3 text-center">
                    Your recent orders will appear here after 
                    you complete your first purchase.
                </p>

                <button onClick={() => Navigate("/allProducts")}
                        className="mt-8 bg-gradient-to-r from-purple-600 to fuchsia-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
                    >
                    Shop Now
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8 h-[560px] flex flex-col">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold">
                    Recent Orders
                </h2>
            </div>

            <div className="flex-1 overflow-y-auto space-y-5 pr-2">
                {orders.map((order) => (
                    <div key={order.orderid}
                        className="border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-purple-300 transition-all duration-300"
                    >
                        <div className="flex justify-between">

                            <div className="flex gap-4">
                                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center">
                                    <Package className="text-purple-600"/>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold">
                                        Order #{order.orderid}
                                    </h3>

                                    <p className="text-gray-800 mt-2">
                                        {order.first_product}
                                    </p>

                                    {order.total_items > 1 && (
                                        <p className="text-gray-500 text-sm"> +{order.total_items} items</p>
                                    )}
                                </div>
                            </div>

                            <div className="text-right">
                                    <h2 className="text-xl font-bold text-purple-600">
                                        Rp {Number(order.total_amount).toLocaleString("id-ID")}
                                    </h2>
                                    <span 
                                    className={`
                                    px-4 py-2 rounded-full text-sm font-semibold inline-block mt-3

                                    ${order.status === "Completed" 
                                        ? "bg-green-100 text-green-700" 
                                        :"bg-yellow-100 text-yellow-700"
                                    }
                                    `}>
                                    {order.status}
                                </span>

                                
                            </div>
                            
                        </div>

                       <button
                       onClick={() => navigate(`/checkout/success/${order.orderid}`)}
                       className="flex items-center gap-1 text-purple-600 font-semibold hover:text-purple-700 mt-4 cursor-pointer">
                        Details

                        <ChevronRight size={18}/>

                       </button>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default RecentOrders;