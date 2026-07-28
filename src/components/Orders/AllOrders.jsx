import Navbar from "../HomePage/Navbar"
import Footer from "../HomePage/Footer"
import api from "../../api/api";
import { useState, useEffect } from "react";
import { Package } from "lucide-react";
import { useNavigate } from "react-router-dom";
import OrderCard from "./OrdersCard";


function AllOrders(){

    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getMyOrders();
    },[]);

    async function getMyOrders(){

        try{
            const response = await api.get("/myorders");
            setOrders(response.data);
            console.log(response.data);

        } catch(error){
            console.log(error);
        }
    }

    return (     
        <>
        <Navbar/>
        
        <div className="bg-purple-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-10">
                
                <div className="py-4">
                    <h1 className="font-bold text-3xl">
                        My Orders

                        <span className="text-purple-600 text-2xl ml-2">
                            ({orders.length} Orders)
                        </span>
                    </h1>
                    {orders.length === 0 ? (
                        <div className="bg-white rounded-3xl p-16 text-center shadow-sm mt-5">
                           
                           <div className="text-7xl mb-4 flex items-cente justify-center">
                                <Package
                                    size={60}
                                    className="text-purple-500 mb-5"
                                />
                           </div>

                           <h2 className="text-2xl font-bold">
                                No Orders Yet
                           </h2>

                           <p className="text-gray-500 mt-3 text-center">
                                Your recent orders will appear here after 
                                you complete your first purchase.
                           </p>
                           
                           <div className="flex items-center justify-center">
                                <button onClick={() => navigate("/allProducts")} 
                                    className="mt-8 bg-purple-600 text-white border border-purple-600 px-6 py-3 rounded-xl cursor-pointer hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                Shop Now
                                </button>
                           </div>
                        </div>
                    ) : (
                        
                        <div className="bg-white rounded-3xl p-16 text-center shadow-sm mt-5">
                            <div className="max-h-[650px] overflow-y-auto p-8 pr-4">
                                {orders.map((order) => (
                                <OrderCard
                                key={order.orderid}
                                order ={order}
                                />
                            ))}
                            </div>
                           
                        </div>
                    )}
                </div>
            </div>
        </div>


        <Footer/>
        </>
    );
}

export default AllOrders;