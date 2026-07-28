import React, {useState, useEffect} from "react";
import {Package, Heart, ShoppingCart, Award, ArrowRight} from "lucide-react";
import axios from "axios";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";

function ProfileStats(){
    
    const [stats, setStats] = useState({
        totalOrders: 0,
        wishlistItems: 0,
        cartItems: 0,
        rewardPoints: 0
    });

    const navigate = useNavigate();

    useEffect(() => {

        fetchDashboard();
    },[])

    async function fetchDashboard(){

        try{
             const response = await api.get(
            "/dashboard");
        
        console.log(response.data);
        setStats(response.data);
      
        } catch(error){
            console.log(error)
        }
     
    }

    return(
       <div className="bg-white rounded-3xl shadow-md p-6 grid grid-cols-4">

            <div className="flex items-center gap-4 border-r px-4 border-gray-100">
                <div className="bg-purple-100 p-4 rounded-xl">
                    <Package className="text-purple-600" size={24}/>
                </div>

                <div className="flex-1">
                    <p className="text-gray-500 text-sm">Total Orders</p>
                    <h2 className="text-4xl font-bold text-indigo-900">{stats.totalOrders}</h2>

                    <div className="flex justify-between mt-4 text-sm text-gray-400">
                        <button  onClick={() => navigate("/allOrders")} className="cursor-pointer">
                            View All Orders                
                        </button>
                         <ArrowRight size={16} className="text-gray-400"/>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 px-4 border-r border-gray-100">
                    <div className="bg-pink-100 p-4 rounded-xl">
                        <Heart className="text-pink-500" size={24}/>
                    </div>

                    <div className="flex-1">
                        <p className="text-gray-500 text-sm">Wishlist</p>
                        <h2 className="text-4xl font-bold text-indigo-900">{stats.wishlistItems}</h2>
                        
                        <div className="flex justify-between mt-4">
                            <p className="text-sm text-gray-400">
                                View All Wishlist
                            </p>
                            <ArrowRight size={16} className="text-gray-400"/>
                        </div>
                    </div>
            </div>

            <div className="flex items-center gap-4 px-4 border-r border-gray-100">
                <div className="bg-purple-100 p-4 rounded-xl">
                    <ShoppingCart className="text-purple-500" size={24}/>
                </div>

                <div className="flex-1">
                    <p className="text-gray-500 text-sm">Cart</p>
                    <h2 className="text-4xl font-bold text-indigo-900">{stats.cartItems}</h2>

                    <div className="flex justify-between mt-4">
                        <p className="text-sm text-gray-400">
                            View All Cart
                        </p>
                        <ArrowRight className="text-gray-400" size={16}/>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 px-4">
                <div className="bg-purple-100 p-4 rounded-xl">
                    <Award className="text-purple-600" size={24}/>
                </div>

                <div className="flex-1">
                    <p className="text-gray-500 text-sm">Reward Points</p>
                    <h2 className="text-4xl font-bold text-indigo-900">{stats.rewarditems}</h2>
                      <div className="flex justify-between mt-4">
                         <p className="text-sm text-gray-400">View All Details</p>
                        <ArrowRight className="text-gray-400" size={16}/>
                    </div>
                </div>
            </div>
       </div>
    );  
}

export default ProfileStats;